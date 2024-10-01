const express = require('express'); // import express with non-module
const students = require('./data/students.json'); // import data student

// Make/initiate express application
const app = express();
const port = 3000;

app.use(express.json());

// Make a routing and response
app.get('/', (req, res) => {
	res.send('Hello...I am now using nodemon');
});

app.get('/students', (req, res) => {
	res.json(students);
});

app.get('/students/:id', (req, res) => {
	// Get the id from params
	const { id } = req.params;

	// find student By id
	const student = students.find(student => student.id == id);
	// If student has been found, it will be response the student data
	if (student) {
		res.json(student);
		return;
	}

	// If there is no student with the id that client request, it will response, it will response not found
	res.status(404).json({ message: 'Student not found' });
});

app.post('/students', (req, res) => {
	const { name, nickName, address, education } = req.body;
	if (!name || name == '') {
		res.status(400).json({
			message: 'Name is required',
		});
		return;
	}
	if (!nickName || nickName == '') {
		res.status(400).json({
			message: 'Nickname is required',
		});
		return;
	}
	if (!req.body.class || req.body.class == '') {
		res.status(400).json({
			message: 'Class is required',
		});
		return;
	}
	if (!address) {
		res.status(400).json({
			message: 'Address is required',
		});
		return;
	}
	if (!education) {
		res.status(400).json({
			message: 'Education is required',
		});
		return;
	}

	const { province, city } = address;
	if (!province) {
		res.status(400).json({
			message: 'Province is required',
		});
		return;
	}
	if (!city) {
		res.status(400).json({
			message: 'City is required',
		});
		return;
	}

	const { bachelor } = education;
	if (!bachelor) {
		res.status(400).json({
			message: 'Bachelor is required',
		});
		return;
	}

	const newId = students.length ? students[students.length - 1].id + 1 : 1; // Add data to current array students

	const newStudent = {
		id: newId, // Set a unique ID for the new student
		name,
		nickName,
		class: req.body.class,
		address: {
			province,
			city,
		},
		education: {
			bachelor,
		},
	};
	// Add the new student to the students array
	students.push(newStudent);

	// Respond with the newly added student
	res.status(201).json(newStudent);
});

// Run the express.js application
app.listen(port, () => {
	console.log(`The express.js app is running on port ${port}`);
});
