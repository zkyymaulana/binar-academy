const students = [
	{
		name: 'David Vincent Gurning',
		nickName: 'David',
		class: 'FSW-1',
		address: {
			province: 'North Sumatera',
			city: 'Medan',
		},
		education: {
			bachelor: 'Universitas Teknologi Del',
		},
	},
	{
		name: 'Yudriqul Aulia',
		nickName: 'Yudi',
		class: 'FSW-1',
		address: {
			province: 'Jambi',
			city: 'Jambi',
		},
		education: {
			bachelor: 'Universitas Jember',
		},
	},
	{
		name: 'Iko Indra Gunawan',
		nickName: 'Iko',
		class: 'FSW-1',
		address: {
			province: 'East Java',
			city: 'Surabaya',
		},
		education: {
			bachelor: 'UPN Veteran Jawa Timur',
		},
	},
	{
		name: 'Arswendo Erza Saweda',
		nickName: 'Erza',
		class: 'FSW-1',
		address: {
			province: 'Lampung',
			city: 'Lampung',
		},
		education: {
			bachelor: 'UPN Veteran Jawa Timur',
		},
	},
	{
		name: 'M. Zaky Pria Maulana',
		nickName: 'Zaky',
		class: 'FSW-1',
		address: {
			province: 'East Java',
			city: 'Kediri',
		},
		education: {
			bachelor: 'UPN Veteran Jawa Timur',
		},
	},
];

// const describe = `There ara three students, ${student[0].nickName}, ${student[1].nickName}, and ${student[2].nickName}. ${student[0].nickName} is from ${student[0].address.city}, ${student[0].address.province}. ${student[1].nickName} is from ${student[1].address.city}, ${student[1].address.province}. And ${student[2].nickName} is from ${student[2].address.city}, ${student[2].address.province}.`;

// console.log(describe);

// student.forEach(s => {
// 	const description = `My name is ${s.name}, used to called ${s.nickName}. I am from ${s.address.city}, ${s.address.province}. And I am student of ${s.education.bachelor}`;
// 	console.log(description);
// });

// const zaky = {
// 	name: 'M. Zaky Pria Maulana',
// 	nickName: 'Zaky',
// 	class: 'FSW-1',
// 	address: {
// 		province: 'Jawa Timur',
// 		city: 'Kediri',
// 	},
// 	education: {
// 		bachelor: 'UPN Veteran Jawa Timur',
// 	},
// };

// const describeMe = `My name is ${zaky.name}, used to called ${zaky.nickName}. Now, I am student of ${zaky.education.bachelor}. I am from ${zaky.address.city}, ${zaky.address.province}`;

// console.log(describeMe);

// students.map(student => {
// 	const describeStudent = `My name is ${student.name}, usually called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. I am a student of ${student.education.bachelor}.`;
// 	console.log(describeStudent);
// });

// /*
//   TODO: Print all students that are from East Java
//   Example Output:
//   My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java.
//   And I am a student of UPN Veteran East Java.
// */

// // The first way
// students.map(student => {
// 	if (student.address.province == 'East Java') {
// 		const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`;
// 		console.log(describeStudent);
// 	}
// });

// The second way
// const filteredStudents = students.filter(student => {
// 	return student.address.province == 'East Java';
// });

// filteredStudents.map(student => {
// 	const describeStudent = `My name is ${student.name}, used to called ${student.nickName}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`;
// 	console.log(describeStudent);
// });

// const ascendingStudents = [...students].sort((a, b) => {
// 	return a.name.localeCompare(b.name);
// });

// console.log('Ascending:', ascendingStudents);

// const descendingStudents = [...students].sort((a, b) => {
// 	return b.name.localeCompare(a.name);
// });u

// console.log('Descending:', descendingStudents);

students.sort((a, b) => {
	if (a.name < b.name) {
		return -1; // don't do anything
	} else {
		return 1; // swap
	}
});

console.log(students);
