import { AnyAction } from "redux";

import {
  requestItems,
  getItems,
  errorItems,
  requestSingleItem,
  getSingleItem,
  errorSingleItem,
} from "@actions/shop";

export const itemsReducer = (
  state = { loading: false, items: [], count: 0 },
  action: AnyAction
) => {
  switch (action.type) {
    case requestItems:
      return { ...state, loading: true };
    case getItems:
      return {
        loading: false,
        count: action.payload.data.length,
        items: action.payload.data,
      };
    case errorItems:
      return { loading: false };
    default:
      return state;
  }
};

export const singleItemReducer = (
  state = { loading: false, item: {} },
  action: AnyAction
) => {
  switch (action.type) {
    case requestSingleItem:
      return { ...state, loading: true };
    case getSingleItem:
      return {
        loading: false,
        item: action.payload.data,
      };
    case errorSingleItem:
      return { loading: false };
    default:
      return state;
  }
};
