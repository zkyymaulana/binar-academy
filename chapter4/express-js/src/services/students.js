const studentRepository = require('../repositories/students');
const { imageUpload } = require('../utils/image-kit');
const { NotFoundError, InternalServerError } = require('../utils/request');

exports.getStudents = async (name, nickName, bachelor) => {
	return studentRepository.getStudents(name, nickName, bachelor);
};

exports.getStudentById = async id => {
	const student = studentRepository.getStudentById(id);

	if (!student) {
		throw new NotFoundError('Student is Not Found!');
	}

	return student;
};

exports.createStudent = async (data, file) => {
	// Upload file to image kit
	if (file?.profilePicture) {
		data.profilePicture = await imageUpload(file.profilePicture);
	}

	// Create the data
	return studentRepository.createStudent(data);
};

exports.updateStudent = async (id, data, file) => {
	// Cek apakah siswa ada
	const existingStudent = await studentRepository.getStudentById(id);
	if (!existingStudent) {
		throw new NotFoundError('Student is Not Found!');
	}

	// replicated existing data with new data
	data = {
		...existingStudent,
		...data,
	};

	// Upload file to image kit
	if (file?.profilePicture) {
		data.profilePicture = await imageUpload(file.profilePicture);
	}

	// Perbarui data siswa
	const updatedStudent = await studentRepository.updateStudent(id, data);
	if (!updatedStudent) {
		throw new InternalServerError(['Failed to update student!']);
	}

	return updatedStudent;
};

exports.deleteStudentById = async id => {
	// find student is exist or not (validate the data)
	const existingStudent = await studentRepository.getStudentById(id);
	if (!existingStudent) {
		throw new NotFoundError('Student is Not Found!');
	}

	// if exist, we will delete the student data
	const deletedStudent = await studentRepository.deleteStudentById(id);
	if (!deletedStudent) {
		throw new InternalServerError(['Failed to delete student!']);
	}

	return deletedStudent;
};
