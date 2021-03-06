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

## MongoDB Database Collection is deployed on AWS Mumbai cluster

### Counter Collection Example:

```json
{
	"_id": { "$oid": "6038b14ad315650004b39226" },
	"saveApiHitCount": 5,
	"updateApiHitCount": 4,
	"__v": 0
}
```

### Task Collection Example:

```json
{"_id":{"$oid":"6038b159d315650004b39227"},"data":"zafar-updated-again","__v":0}
{"_id":{"$oid":"6038b165d315650004b39228"},"data":"John Doe","__v":0}
{"_id":{"$oid":"6038c5b7d315650004b39229"},"data":"Hello Precily","__v":0}
{"_id":{"$oid":"6038c5c9d315650004b3922a"},"data":"Task 1 Updated Once","__v":0}
{"_id":{"$oid":"6038c5cdd315650004b3922b"},"data":"Task 2","__v":0}

```

---
