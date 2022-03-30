import { AnyAction } from "redux";

import {
  requestItemsCount,
  getItemsCount,
  errorItemsCount,
} from "@actions/count";

export const uniqueItemsCountReducer = (
  state = { loading: false, count: 0 },
  action: AnyAction
) => {
  switch (action.type) {
    case requestItemsCount:
      return { ...state, loading: true };
    case getItemsCount:
      return {
        loading: false,
        count: action.payload,
      };
    case errorItemsCount:
      return { loading: false };
    default:
      return state;
  }
};
