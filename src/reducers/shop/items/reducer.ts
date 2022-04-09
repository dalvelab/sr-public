import { AnyAction } from "redux";

import {
  requestItems,
  getItems,
  errorItems,
  requestSingleItem,
  getSingleItem,
  errorSingleItem,
  getFavouriteItemsFromLS,
  addFavouriteItemToLS,
  requestFavouriteItems,
  getFavouriteItems,
  errorFavouriteItems,
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

export const favouriteItemsFromLSReducer = (
  state = { id: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case getFavouriteItemsFromLS:
      return {
        id: action.payload,
      };
    case addFavouriteItemToLS:
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};

export const favouriteItemsReducer = (
  state = { loading: false, items: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case requestFavouriteItems:
      return { ...state, loading: true };
    case getFavouriteItems:
      return {
        loading: false,
        items: action.payload.data,
      };
    case errorFavouriteItems:
      return { loading: false };
    default:
      return state;
  }
};
