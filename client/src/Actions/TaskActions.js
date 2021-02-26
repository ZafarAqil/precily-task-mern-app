import Axios from "axios";

import {
	BASE_URL,
	TASK_LIST,
	TASK_SAVE,
	TASK_UPDATE,
	SELECTED_TASK,
	DATA_LOADER,
} from "../Values/Types";
import { getCounters } from "./CounterActions";

const LOG_TAG = "Task Actions: ";

export const getTasks = () => {
	const url = BASE_URL + "task/gettasks";
	return (dispatch) => {
		dispatch({ type: DATA_LOADER, payload: true });
		Axios.get(
			url,
			{},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				const rdata = response.data;
				if (rdata.success) {
					dispatch({
						type: TASK_LIST,
						payload: { dataList: rdata.data },
					});
				} else {
					dispatch({
						type: TASK_LIST,
						payload: { error: true },
					});
				}
				dispatch({ type: DATA_LOADER, payload: false });
			})
			.catch((err) => {
				dispatch({
					type: TASK_LIST,
					payload: { error: true },
				});
				dispatch({ type: DATA_LOADER, payload: false });
			});
	};
};

export const saveTask = ({ data }) => {
	const url = BASE_URL + "task/save";
	return (dispatch) => {
		dispatch({ type: DATA_LOADER, payload: true });
		Axios.post(
			url,
			{ data: data },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				const rdata = response.data;
				if (rdata.success) {
					dispatch(getTasks());
					dispatch(getCounters());
					dispatch({
						type: TASK_SAVE,
						payload: { error: false },
					});
				} else {
					dispatch({
						type: TASK_SAVE,
						payload: { error: true },
					});
					dispatch({ type: DATA_LOADER, payload: false });
				}
			})
			.catch((err) => {
				dispatch({
					type: TASK_SAVE,
					payload: { error: true },
				});
				dispatch({ type: DATA_LOADER, payload: false });
			});
	};
};

export const updateTask = ({ id, data }) => {
	const url = BASE_URL + "task/save";
	return (dispatch) => {
		dispatch({ type: DATA_LOADER, payload: true });
		Axios.post(
			url,
			{ id: id, data: data },
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				const rdata = response.data;
				if (rdata.success) {
					dispatch(getTasks());
					dispatch(getCounters());
					dispatch({
						type: TASK_UPDATE,
						payload: { error: false },
					});
				} else {
					dispatch({
						type: TASK_UPDATE,
						payload: { error: true },
					});
					dispatch({ type: DATA_LOADER, payload: false });
				}
			})
			.catch((err) => {
				dispatch({
					type: TASK_UPDATE,
					payload: { error: true },
				});
				dispatch({ type: DATA_LOADER, payload: false });
			});
	};
};

export const selectTask = (task) => {
	return (dispatch) => {
		dispatch({
			type: SELECTED_TASK,
			payload: { data: task },
		});
	};
};

export const clearTaskErrors = () => {
	return (dispatch) => {
		dispatch({
			type: TASK_LIST,
			payload: { error: false },
		});
		dispatch({
			type: TASK_SAVE,
			payload: { error: false },
		});
		dispatch({
			type: TASK_UPDATE,
			payload: { error: false },
		});
	};
};
