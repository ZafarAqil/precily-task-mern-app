const express = require('express');

const countController = require('../controllers/count-controller');

const router = express.Router();

const CONTROLLER_ROUTE = '/count';

router.get(`${CONTROLLER_ROUTE}/getcount`, countController.getCount);

module.exports = router;