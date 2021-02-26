import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Loader from "./Components/Loader";
import "./App.css";
import Window from "./Components/Window";
import {
	clearCounterErrors,
	clearTaskErrors,
	getCounters,
	getTasks,
	saveTask,
	selectTask,
	updateTask,
} from "./Actions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCounters());
		dispatch(getTasks());
	}, []);

	const counters = useSelector((state) => state.counters.counters);
	const tasks = useSelector((state) => state.tasks.taskList);
	const selectedTask = useSelector((state) => state.tasks.selectedTask);
	const taskListError = useSelector((state) => state.tasks.error);
	const saveTaskError = useSelector((state) => state.tasks.saveError);
	const updateTaskError = useSelector((state) => state.tasks.updateError);
	const fetchCounterError = useSelector((state) => state.counters.error);
	const isLoading = useSelector((state) => state.loading.isLoading);

	useEffect(() => {
		if (taskListError) {
			alert("Error fetching task list");
		}
		if (saveTaskError) {
			alert("Error saving task");
		}
		if (updateTaskError) {
			alert("Error updating task");
		}
		if (fetchCounterError) {
			alert("Error fetching counter");
		}
		dispatch(clearCounterErrors());
		dispatch(clearTaskErrors());
	}, []);

	const [data, setData] = useState("");
	const taskListItems = [];

	const onSubmit = (e) => {
		e.preventDefault();
		if (selectedTask != null && selectedTask._id != null) {
			dispatch(updateTask({ data, id: selectedTask._id }));
		} else {
			dispatch(saveTask({ data }));
		}
		dispatch(selectTask(null));
		setData("");
	};

	_.forEach(tasks ? tasks.tasks : [], (task) => {
		taskListItems.push(
			<li
				className="task"
				onClick={() => {
					dispatch(selectTask(task));
					setData(task.data);
				}}
			>
				{task.data}
			</li>
		);
	});
	return (
		<div>
			{isLoading ? <Loader /> : null}
			<section className="App">
				<Window window="window1">
					<ul>{taskListItems}</ul>
				</Window>
				<Window window="window2">
					<form action="" className="form" onSubmit={onSubmit}>
						<div className="formControl">
							<label htmlFor="text">Enter Text:</label>
							<input
								type="text"
								id="text"
								className="formInput"
								placeholder="Data"
								value={data}
								onChange={(e) => setData(e.target.value)}
							/>
						</div>
						<div className="btnGroup">
							<button
								type="reset"
								className="btn"
								onClick={() => {
									dispatch(selectTask(null));
									setData("");
								}}
							>
								Clear
							</button>
							<button
								type="submit"
								className="btn btnAction"
								onClick={onSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</Window>
			</section>
			<section>
				<Window>
					<div className="count">
						<section>
							<h1>
								Add Count: {counters ? counters.count.saveApiHitCount : 0}
							</h1>
						</section>
						<section>
							<h1>
								Update Count: {counters ? counters.count.updateApiHitCount : 0}
							</h1>
						</section>
					</div>
				</Window>
			</section>
		</div>
	);
}

export default App;
