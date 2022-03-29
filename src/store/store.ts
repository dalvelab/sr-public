import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { shopReducer } from "@reducers/shop";

const SRPublicAppState = {
  shop: shopReducer,
};

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(
  combineReducers({ ...SRPublicAppState }),
  composedEnhancers
);
