import { combineReducers } from "redux";
import { uniqueItemsCountReducer } from "./items";

export const countReducer = combineReducers({
  items: uniqueItemsCountReducer,
});
