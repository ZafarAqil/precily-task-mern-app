const { getCount } = require('../dbhelper/CounterHelper');
const HttpError = require('../models/HttpError');

const LOG_TAG = "count-controller: ";

const getCountAPIHit = (req, res, next) => {
    getCount()
        .then(count => {
            res.status(200).json({ success: true, data: { count } })
        })
        .catch(error => next(new HttpError(JSON.stringify(error), 500, 'GET_COUNT_ERROR')));
};

exports.getCount = getCountAPIHit;
