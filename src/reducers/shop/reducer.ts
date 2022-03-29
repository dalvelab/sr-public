import { combineReducers } from "redux";
import { itemsReducer } from "./items";
import { categoriesReducer } from "./categories";

export const shopReducer = combineReducers({
  categoriesTransaction: categoriesReducer,
  itemsTransaction: itemsReducer,
});
