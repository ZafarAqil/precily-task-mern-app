// Imports for this file
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema structure for mongodb collection
const TaskSchema = new Schema({
    data: {
        type: String,
        required: true
    }
}, {
    collection: 'Task'
});

//export for schema
exports.Task = mongoose.model('Task', TaskSchema);
