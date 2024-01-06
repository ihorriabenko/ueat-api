import {ErrorRequestHandler, RequestHandler} from 'express';
import {Schema} from 'joi';

const notFound: RequestHandler = (req, res, next) => {
	res.status(404).json({ message: "Not Found" });
};

const serverError: ErrorRequestHandler = (err, _, res) => {
	if (err instanceof SyntaxError) {
		return res.status(400).json({ message: "Bad Request" });
	}

	console.error(err);
	res.status(500).json({ message: "Server Error" });
};

const validateBody = (schema: Schema) => {
	const func: RequestHandler = (req, res, next) => {
		const {error} = schema.validate(req.body);
		if (error) {
			res.status(400).json({error: error.details[0].message})
		}
		next()
	}

	return func
}

export {
	notFound,
	serverError,
	validateBody,
}
