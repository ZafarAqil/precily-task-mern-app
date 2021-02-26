import {
	SELECTED_TASK,
	TASK_LIST,
	TASK_SAVE,
	TASK_UPDATE,
} from "../Values/Types";

const INITIAL_STATE = {
	taskList: [],
	saveError: false,
	updateError: false,
	selectedTask: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TASK_LIST:
			if (action.payload.error) {
				return { ...state, error: action.payload.error };
			}
			return { ...state, taskList: action.payload.dataList, error: false };
		case TASK_SAVE:
			return { ...state, saveError: action.payload.error };
		case TASK_UPDATE:
			return { ...state, updateError: action.payload.error };
		case SELECTED_TASK:
			return { ...state, selectedTask: action.payload.data };
		default:
			return state;
	}
};
