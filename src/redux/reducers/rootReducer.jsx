import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    filterEvents: filterReducer,
});