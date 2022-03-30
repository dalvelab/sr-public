import { combineReducers } from "redux";
import { itemsReducer, singleItemReducer } from "./items";
import { categoriesReducer } from "./categories";

export const shopReducer = combineReducers({
  categoriesTransaction: categoriesReducer,
  itemsTransaction: itemsReducer,
  singleItemTransaction: singleItemReducer,
});
