//Import the mongoose module
var mongoose = require("mongoose");
const { Task } = require("../models/Task");
const { incrementCount } = require("./CounterHelper");

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var dbConnection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
dbConnection.on(
	"error",
	console.error.bind(console, "MongoDB connection error:")
);

const LOG_TAG = "TasksDBHelper: ";

const createTask = ({ data }) => {
	return new Promise((resolve, reject) => {
		const createdTask = new Task({
			data: data,
		});
		createdTask
			.save()
			.then((savedData) => {
				incrementCount({ save: true })
					.then(() => {
						console.log(LOG_TAG, "createTask, created new task: ", savedData);
						resolve(savedData);
					})
					.catch((err) => {
						console.log(LOG_TAG, "createTask: ", err);
						reject(err);
					});
			})
			.catch((err) => {
				console.log(LOG_TAG, "createTask: ", err);
				reject(err);
			});
	});
};

const updateTask = ({ data, id }) => {
	return new Promise((resolve, reject) => {
		Task.findById(id)
			.then((task) => {
				console.log(LOG_TAG, "updateTask, found task: ", task);
				task.data = data;
				task
					.save()
					.then((updatedTask) => {
						incrementCount({ update: true })
							.then(() => {
								console.log(LOG_TAG, "updateTask, updated task: ", updatedTask);
								resolve(updatedTask);
							})
							.catch((err) => {
								console.log(LOG_TAG, "updateTask: ", err);
								reject(err);
							});
					})
					.catch((err) => {
						console.log(LOG_TAG, "updateTask: ", err);
						reject(err);
					});
			})
			.catch((err) => {
				console.log(LOG_TAG, "updateTask: ", err);
				reject(err);
			});
	});
};

const getTasks = () => {
	return new Promise((resolve, reject) => {
		Task.find({})
			.then((tasks) => {
				console.log(LOG_TAG, "getTasks, found tasks: ", tasks);
				resolve(tasks);
			})
			.catch((err) => {
				console.log(LOG_TAG, "getTasks: ", err);
				reject(err);
			});
	});
};

exports.getTasks = getTasks;
exports.createTask = createTask;
exports.updateTask = updateTask;
