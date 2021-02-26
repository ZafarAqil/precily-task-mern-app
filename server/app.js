const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const task = require("./routes/task");
const count = require("./routes/count");

app.use(bodyParser.json());

app.use(cors());
app.use(task);
app.use(count);

// Default error message response
app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	} else {
		res.status(error.code || 500).json({
			success: false,
			error: {
				message: error.message || "An unknown error has occured",
				code: error.code === 401 ? "UNAUTHORIZED_ERR" : "UNKNOWN_ERR",
			},
		});
	}
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
