import { AnyAction } from "redux";

import {
  requestCategories,
  getCategories,
  errorCategories,
} from "@actions/shop";

export const categoriesReducer = (
  state = { loading: false, categories: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case requestCategories:
      return { ...state, loading: true };
    case getCategories:
      return {
        loading: false,
        categories: action.payload,
      };
    case errorCategories:
      return { loading: false };
    default:
      return state;
  }
};
