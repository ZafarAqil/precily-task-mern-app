// Imports for this file
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema structure for mongodb collection
const CounterSchema = new Schema(
	{
		saveApiHitCount: {
			type: Number,
			required: true,
			default: 0,
		},
		updateApiHitCount: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		collection: "Counter",
	}
);

//export for schema
module.exports = mongoose.model("Counter", CounterSchema);
