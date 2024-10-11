const studentService = require('../services/students');
const { successResponse } = require('../utils/response');

exports.getStudents = (req, res, next) => {
	const data = studentService.getStudents(req.query?.name, req.query?.nickName, req.query?.bachelor);
	successResponse(res, data);
};

exports.getStudentById = (req, res, next) => {
	const { id } = req.params;
	const data = studentService.getStudentById(id);
	successResponse(res, data);
};

exports.createStudent = async (req, res, next) => {
	const data = await studentService.createStudent(req.body, req.files);
	successResponse(res, data);
};

exports.updateStudent = async (req, res, next) => {
	const { id } = req.params;
	const data = await studentService.updateStudent(id, req.body, req.files);
	successResponse(res, data);
};

exports.deleteStudentById = (req, res, next) => {
	const { id } = req.params;
	const data = studentService.deleteStudentById(id);
	successResponse(res, data);
};
