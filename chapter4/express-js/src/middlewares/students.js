const { z } = require('zod');
const { BadRequestError } = require('../utils/request');

exports.validateGetStudents = (req, res, next) => {
	// Validate the query
	const validateQuery = z.object({
		name: z.string().optional(),
		nickName: z.string().optional(),
		bachelor: z.string().optional(),
	});

	const resultValidateQuery = validateQuery.safeParse(req.query);
	if (!resultValidateQuery.success) {
		// If validation fails, return error messages
		throw new BadRequestError(resultValidateQuery.error.errors);
	}

	next();
};

exports.validateGetStudentById = (req, res, next) => {
	// Make a validation schema
	const validateParams = z.object({
		id: z.string(),
	});

	const result = validateParams.safeParse(req.params);
	if (!result.success) {
		// If validation fails, return error messages
		throw new BadRequestError(result.error.errors);
	}

	next();
};

exports.validateCreateStudent = (req, res, next) => {
	// Validation body schema
	const validateBody = z.object({
		name: z.string(),
		nick_name: z.string(),
		class_id: z.string(),
		university_id: z.string(),
	});

	// The file is not required
	const validateFileBody = z
		.object({
			profile_picture: z
				.object({
					name: z.string(),
					data: z.any(),
				})
				.nullable()
				.optional(),
		})
		.nullable()
		.optional();

	// Validate
	const result = validateBody.safeParse(req.body);
	if (!result.success) {
		// If validation fails, return error messages
		throw new BadRequestError(result.error.errors);
	}

	// Validate
	const resultValidateFiles = validateFileBody.safeParse(req.files);
	if (!resultValidateFiles.success) {
		// If validation fails, return error messages
		throw new BadRequestError(resultValidateFiles.error.errors);
	}

	next();
};

exports.validateUpdateStudent = (req, res, next) => {
	// zod validation
	const validateParams = z.object({
		id: z.string(),
	});

	const resultValidateParams = validateParams.safeParse(req.params);
	if (!resultValidateParams.success) {
		// If validation fails, return error messages
		throw new BadRequestError(resultValidateParams.error.errors);
	}

	// Validation body schema, mirroring create
	const validateBody = z.object({
		name: z.string(),
		nick_name: z.string(), // Konsisten dengan create
		class_id: z.string(),
		university_id: z.string(),
	});

	// File validation is not required, just like in create
	const validateFileBody = z
		.object({
			profile_picture: z
				.object({
					name: z.string(),
					data: z.any(),
				})
				.nullable()
				.optional(),
		})
		.nullable()
		.optional();

	// Validate request body
	const resultValidateBody = validateBody.safeParse(req.body);
	if (!resultValidateBody.success) {
		// If validation fails, return error messages
		throw new BadRequestError(resultValidateBody.error.errors);
	}

	// Validate files if present
	const resultValidateFiles = validateFileBody.safeParse(req.files);
	if (!resultValidateFiles.success) {
		// If validation fails, return error messages
		throw new BadRequestError(resultValidateFiles.error.errors);
	}

	next();
};

exports.validateDeleteStudentById = (req, res, next) => {
	// Validasi parameter ID menggunakan zod, mirip dengan validateUpdateStudent
	const validateParams = z.object({
		id: z.string(),
	});

	const resultValidateParams = validateParams.safeParse(req.params);
	if (!resultValidateParams.success) {
		// Jika validasi gagal, kembalikan pesan error
		throw new BadRequestError(resultValidateParams.error.errors);
	}

	next();
};
