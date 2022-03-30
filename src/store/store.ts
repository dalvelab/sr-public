import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { shopReducer } from "@reducers/shop";
import { countReducer } from "@reducers/count";

const SRPublicAppState = {
  shop: shopReducer,
  count: countReducer,
};

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(
  combineReducers({ ...SRPublicAppState }),
  composedEnhancers
);
