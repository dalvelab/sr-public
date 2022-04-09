import { combineReducers } from "redux";
import {
  itemsReducer,
  singleItemReducer,
  favouriteItemsFromLSReducer,
  favouriteItemsReducer,
} from "./items";
import { categoriesReducer } from "./categories";

export const shopReducer = combineReducers({
  categoriesTransaction: categoriesReducer,
  itemsTransaction: itemsReducer,
  singleItemTransaction: singleItemReducer,
  favouriteItems: combineReducers({
    items_id: favouriteItemsFromLSReducer,
    items: favouriteItemsReducer,
  }),
});
