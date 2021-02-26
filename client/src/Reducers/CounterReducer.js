import { COUNTERS_DATA } from "../Values/Types";

const INITIAL_STATE = {
	counters: {
		count: {
			saveApiHitCount: 0,
			updateApiHitCount: 0,
		},
	},
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case COUNTERS_DATA:
			if (action.payload.error) {
				return { ...state, error: action.payload.error };
			}
			return { ...state, counters: action.payload.data, error: false };
		default:
			return state;
	}
};
