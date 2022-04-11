import { combineReducers } from "redux";
import {
  itemsReducer,
  singleItemReducer,
  favouriteItemsFromLSReducer,
  favouriteItemsReducer,
} from "./items";
import { categoriesReducer } from "./categories";
import { sortShopReducer } from "./sorting";

export const shopReducer = combineReducers({
  sorting: sortShopReducer,
  categoriesTransaction: categoriesReducer,
  itemsTransaction: itemsReducer,
  singleItemTransaction: singleItemReducer,
  favouriteItems: combineReducers({
    items_id: favouriteItemsFromLSReducer,
    items: favouriteItemsReducer,
  }),
});
