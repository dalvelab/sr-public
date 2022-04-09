import { AnyAction } from "redux";

import {
  requestItemsCount,
  getItemsCount,
  errorItemsCount,
} from "@actions/count";

export interface IUniqueItemsReducer {
  loading: boolean;
  count?: number;
}

export const uniqueItemsCountReducer = (
  state: IUniqueItemsReducer = { loading: false, count: 0 },
  action: AnyAction
): IUniqueItemsReducer => {
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
