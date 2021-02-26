import Axios from "axios";

import { BASE_URL, COUNTERS_DATA, DATA_LOADER } from "../Values/Types";

const LOG_TAG = "Counter Actions: ";

export const getCounters = () => {
	const url = BASE_URL + "count/getcount";
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
						type: COUNTERS_DATA,
						payload: { data: rdata.data },
					});
				} else {
					dispatch({
						type: COUNTERS_DATA,
						payload: { error: true },
					});
				}
				dispatch({ type: DATA_LOADER, payload: false });
			})
			.catch((err) => {
				dispatch({
					type: COUNTERS_DATA,
					payload: { error: true },
				});
				dispatch({ type: DATA_LOADER, payload: false });
			});
	};
};

export const clearCounterErrors = () => {
	return (dispatch) => {
		dispatch({
			type: COUNTERS_DATA,
			payload: { error: false },
		});
	};
};
