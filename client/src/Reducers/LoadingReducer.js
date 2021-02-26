import { DATA_LOADER } from "../Values/Types";

const INITIAL_STATE = {
	isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DATA_LOADER:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
