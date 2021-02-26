# Precily, Inc. MERN Stack Task App

Full-Stack MERN app made as an assignment for Precily, Inc.

## Frontend is deployed on Firebase

Link: https://precily-task-mern-app.web.app/

## Backend API is hosted on Heroku US server

Link: https://precily-task-mern-app.herokuapp.com/

## APIs:

- GET getcount https://precily-task-mern-app.herokuapp.com/count/getcount

### Example:

```javascript
var axios = require("axios");

var config = {
	method: "get",
	url: "https://precily-task-mern-app.herokuapp.com/count/getcount",
	headers: {},
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
```

<br>

- GET gettasks https://precily-task-mern-app.herokuapp.com/task/gettasks

### Example:

```javascript
var axios = require("axios");

var config = {
	method: "get",
	url: "https://precily-task-mern-app.herokuapp.com/task/gettasks",
	headers: {},
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
```

<br>

- POST save[create] https://precily-task-mern-app.herokuapp.com/task/save

### Example:

```javascript
var axios = require("axios");
var data = JSON.stringify({ data: "test1" });

var config = {
	method: "post",
	url: "https://precily-task-mern-app.herokuapp.com/task/save",
	headers: {
		"Content-Type": "application/json",
	},
	data: data,
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
```

<br>

- POST save[update] https://precily-task-mern-app.herokuapp.com/task/save

### Example:

```javascript
var axios = require("axios");
var data = JSON.stringify({ id: "6036abe227e431e9ab2360eb", data: "changed" });

var config = {
	method: "post",
	url: "https://precily-task-mern-app.herokuapp.com/task/save",
	headers: {
		"Content-Type": "application/json",
	},
	data: data,
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
```

<br>

## API execution time:

### Heroku US Server:

- gettasks: 460 ms - 480 ms
- getcount: 460 ms - 480 ms
