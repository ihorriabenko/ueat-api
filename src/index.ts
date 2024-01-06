import mongoose from "mongoose";
import app from './app'
const {DB_HOST, PORT} = process.env

if (!DB_HOST) {
	console.error('Please define DB_HOST environment variable with the database connection string.');
	process.exit(1);
}

mongoose
.connect(DB_HOST)
.then(() => {
	app.listen(PORT);
	console.log(`Database connection successful at port ${PORT}`);
})
.catch((err) => {
	console.log(err.message);
	process.exit(1);
});
