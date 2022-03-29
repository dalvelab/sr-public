import { AnyAction } from "redux";

import { requestItems, getItems, errorItems } from "@actions/shop";

import { IItem } from "@models/data";

interface IItemsState {
  items: IItem[];
  count: number;
  loading: boolean;
}

const initialState: IItemsState = {
  items: [],
  count: 0,
  loading: false,
};

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
        items: action.payload,
      };
    case errorItems:
      return { loading: false };
    default:
      return state;
  }
};
