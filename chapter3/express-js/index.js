const express = require('express'); // Import express with non-module
const fs = require('fs');
const { z } = require('zod');
const students = require('./data/students.json'); // Import data student

/* Make/initiate expess application */
const app = express();
const port = 4000;

/* We need to activate body parser/reader */
app.use(express.json());

/* Make a routing and response */
app.get('/', (req, res) => {
	res.send(`Hello World, I am using nodemon!`);
});

app.get('/students', (req, res) => {
	res.json(students);
});

app.get('/students/:id', (req, res) => {
	// Make a validation schema
	const validateParams = z.object({
		id: z.string(),
	});

	const result = validateParams.safeParse(req.params);
	if (!result.success) {
		// If validation fails, return error messages
		return res.status(400).json({
			message: 'Validation failed',
			errors: result.error.errors.map(err => ({
				field: err.path[0],
				issue: err.message,
			})),
		});
	}

	// Get the id from params
	const { id } = req.params;

	// find student by id
	const student = students.find(student => student.id == id);
	// If student has been found, it will be response the student data
	if (student) {
		res.json(student);
		return;
	}

	// If there is no student with the id that client request, it will response not found
	res.status(404).json({ message: 'Student not found!' });
});

app.post('/students', (req, res) => {
	// Validation body schema
	const validateBody = z.object({
		name: z.string(),
		nickName: z.string(),
		class: z.string(),
		address: z.object({
			province: z.string(),
			city: z.string(),
		}),
		education: z
			.object({
				bachelor: z.string().optional().nullable(),
			})
			.optional()
			.nullable(),
	});

	// Validate
	const result = validateBody.safeParse(req.body);
	if (!result.success) {
		// If validation fails, return error messages
		return res.status(400).json({
			message: 'Validation failed',
			errors: result.error.errors.map(err => ({
				field: err.path[0],
				issue: err.message,
			})),
		});
	}

	// Find the max index to defnine the new data id
	const maxId = students.reduce((max, student) => student.id > max && student.id, 0);

	// let max = 0;
	// for (let index = 0; index < students.length; index++) {
	//     if (students[index].id > max) {
	//         max = students[index].id;
	//     }
	// }
	// let max = 0;
	// students.map((student) => {
	//     if (student.id > max) {
	//         max = student.id;
	//     }
	// });

	const newStudent = {
		id: maxId + 1,
		...req.body,
	};

	/* Add data to current array students */
	students.push(newStudent);

	// Save the latest data to json
	fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 4), 'utf-8');

	res.status(201).json(newStudent);
});

// TODO: Update a student: PUT /students/:id
app.put('/students/:id', (req, res) => {
	// Validate the request params (student id)
	const validateParams = z.object({
		id: z.string(),
	});

	const resultParams = validateParams.safeParse(req.params);
	if (!resultParams.success) {
		return res.status(400).json({
			message: 'Validation failed',
			errors: resultParams.error.errors.map(err => ({
				field: err.path[0],
				issue: err.message,
			})),
		});
	}

	// Validate the request body (student data)
	const validateBody = z.object({
		name: z.string(),
		nickName: z.string(),
		class: z.string(),
		address: z.object({
			province: z.string(),
			city: z.string(),
		}),
		education: z
			.object({
				bachelor: z.string().optional().nullable(),
			})
			.optional()
			.nullable(),
	});

	const resultBody = validateBody.safeParse(req.body);
	if (!resultBody.success) {
		return res.status(400).json({
			message: 'Validation failed',
			errors: resultBody.error.errors.map(err => ({
				field: err.path[0],
				issue: err.message,
			})),
		});
	}

	// Get the id from params
	const { id } = req.params;

	// Find the student by id
	const studentIndex = students.findIndex(student => student.id == id);

	// If the student is found
	if (studentIndex >= 0) {
		// Update student data with the new values
		students[studentIndex] = {
			...students[studentIndex], // keep previous data
			...req.body, // update with new data
		};

		// Save the updated data to JSON
		fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 4), 'utf-8');

		return res.status(200).json({ message: 'Student updated successfully', data: students[studentIndex] });
	}

	// If no student found
	res.status(404).json({ message: 'Student not found!' });
});

// Delete a student: DELETE /students/:id
app.delete('/students/:id', (req, res) => {
	// Make a validation schema
	const validateParams = z.object({
		id: z.string(),
	});

	const result = validateParams.safeParse(req.params);
	if (!result.success) {
		// If validation fails, return error messages
		return res.status(400).json({
			message: 'Validation failed',
			errors: result.error.errors.map(err => ({
				field: err.path[0],
				issue: err.message,
			})),
		});
	}

	// Get the id from params
	const { id } = req.params;

	// Find index
	const studentIndex = students.findIndex(student => student.id == id);

	// If the index found
	if (studentIndex >= 0) {
		const deletedStudent = students.splice(studentIndex, 1);

		// Update the json
		fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 4), 'utf-8');

		return res.status(200).json({ message: 'Success', data: deletedStudent });
	}

	// If no index found
	res.status({ message: 'Student not found!' });
});

/* Run the express.js application */
app.listen(port, () => {
	console.log(`The express.js app is runing on port ${port}`);
});
