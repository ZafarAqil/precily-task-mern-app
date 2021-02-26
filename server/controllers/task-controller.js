const { getTasks, createTask, updateTask } = require('../dbhelper/TaskHelper');
const HttpError = require('../models/HttpError');

const LOG_TAG = "task-controller: ";

const save = (req, res, next) => {
    const id = req.body.id;
    const data = req.body.data;
    console.log(id, data);
    if (id) {
        updateTask({ id, data })
            .then(task => {
                res.status(200).json({ success: true, data: { task } })
            })
            .catch(error => next(new HttpError(JSON.stringify(error), 500, 'UPDATE_TASK_ERROR')));
    } else {
        createTask({ data })
            .then(task => {
                res.status(200).json({ success: true, data: { task } })
            })
            .catch(error => next(new HttpError(JSON.stringify(error), 500, 'CREATE_TASK_ERROR')));

    }

};

const tasks = (req, res, next) => {
    getTasks()
        .then(tasks => {
            res.status(200).json({ success: true, data: { tasks } })
        })
        .catch(error => next(new HttpError(JSON.stringify(error), 500, 'GET_TASKS_ERROR')));
};


exports.save = save;
exports.tasks = tasks;
