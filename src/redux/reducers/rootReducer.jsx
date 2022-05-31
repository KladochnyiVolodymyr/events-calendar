import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
    filterEvents: filterReducer,
    initEvents : eventReducer
});