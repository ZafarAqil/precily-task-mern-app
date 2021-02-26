const express = require('express');

const taskController = require('../controllers/task-controller');

const router = express.Router();

const CONTROLLER_ROUTE = '/task';

router.post(`${CONTROLLER_ROUTE}/save`, taskController.save);
router.get(`${CONTROLLER_ROUTE}/gettasks`, taskController.tasks);

module.exports = router;