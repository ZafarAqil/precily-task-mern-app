//Import the mongoose module
var mongoose = require("mongoose");
const Counter = require("../models/Counter");

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

const LOG_TAG = "CounterDBHelper: ";

const incrementCount = ({ save, update }) => {
	return new Promise((resolve, reject) => {
		getCount()
			.then((counters) => {
				console.log(counters);
				if (save) counters.saveApiHitCount += 1;
				if (update) counters.updateApiHitCount += 1;
				counters.save();
				resolve();
			})
			.catch((error) => reject(error));
	});
};

const getCount = () => {
	return new Promise((resolve, reject) => {
		Counter.find({})
			.then((counters) => {
				if (counters != null && counters.length > 0) {
					console.log(
						LOG_TAG,
						"getCount, found existing counter object: ",
						counters
					);
					resolve(counters[0]);
				} else {
					const createdCounter = new Counter();
					createdCounter.save().then((data) => {
						console.log(LOG_TAG, "getCount, created new counter object: ", [
							data,
						]);
						resolve(data);
					});
				}
			})
			.catch((err) => {
				console.log(LOG_TAG, err);
				reject(err);
			});
	});
};

exports.getCount = getCount;
exports.incrementCount = incrementCount;
