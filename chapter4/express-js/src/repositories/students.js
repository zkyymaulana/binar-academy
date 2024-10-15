const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const JSONBigInt = require('json-bigint');
const students = require('../../data/students.json');

const prisma = new PrismaClient();

exports.getStudents = async (name, nickName) => {
	// Define query here
	let query = {
		include: {
			classes: true,
			universities: true,
		},
	};

	// It will generate the query
	let orQuery = [];
	if (name) {
		orQuery.push({
			name: { contains: name, mode: 'insensitive' },
		});
	}
	if (nickName) {
		orQuery.push({
			nick_name: { contains: nickName, mode: 'insensitive' },
		});
	}
	if (orQuery.length > 0) {
		query.where = {
			...query.where,
			OR: orQuery,
		};
	}

	// Find by query
	const searchedStudents = await prisma.students.findMany(query);

	// Convert BigInt fields to string for safe serialization
	const serializedStudents = JSONBigInt.stringify(searchedStudents);
	return JSONBigInt.parse(serializedStudents);
};

exports.getStudentById = async id => {
	// find student by id
	const student = await prisma.students.findFirst({
		where: {
			id: id,
		},
	});

	// Convert BigInt fields to string for safe serialization
	const serializedStudents = JSONBigInt.stringify(student);
	return JSONBigInt.parse(serializedStudents);
};

exports.createStudent = async data => {
	const newStudent = await prisma.students.create({
		data,
	});

	// Convert BigInt fields to string for safe serialization
	const serializedStudents = JSONBigInt.stringify(newStudent);
	return JSONBigInt.parse(serializedStudents);
};

exports.updateStudent = async (id, data) => {
	// Check if the student exists
	const student = await prisma.students.findFirst({
		where: {
			id: id,
		},
	});
	if (!student) {
		// If student not found, throw error
		throw new NotFoundError('Student is Not Found!');
	}

	// Update student using Prisma
	const updatedStudent = await prisma.students.update({
		where: {
			id: id,
		},
		data,
	});

	// Convert BigInt fields to string for safe serialization
	const serializedStudent = JSONBigInt.stringify(updatedStudent);
	return JSONBigInt.parse(serializedStudent);
};

exports.deleteStudentById = async id => {
	// Check if the student exists
	const student = await prisma.students.findFirst({
		where: {
			id: id,
		},
	});
	if (!student) {
		// If student not found, throw error
		throw new NotFoundError('Student is Not Found!');
	}

	// Delete student using Prisma
	const deletedStudent = await prisma.students.delete({
		where: {
			id: id,
		},
	});

	// Convert BigInt fields to string for safe serialization
	const serializedStudent = JSONBigInt.stringify(deletedStudent);
	return JSONBigInt.parse(serializedStudent);
};
