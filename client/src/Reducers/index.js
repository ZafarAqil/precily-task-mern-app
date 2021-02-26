// /* eslint-disable prettier/prettier */
import { combineReducers } from "redux";
import TaskReducer from "./TaskReducer";
import CounterReducer from "./CounterReducer";
import LoadingReducer from "./LoadingReducer";

export default combineReducers({
	tasks: TaskReducer,
	counters: CounterReducer,
	loading: LoadingReducer,
});
