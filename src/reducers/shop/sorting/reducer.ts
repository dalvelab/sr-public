import { AnyAction } from "redux";
import { ItemShopSort } from "@models/sort";

import { setShopSorting, clearShopSorting } from "@actions/shop";

export const sortShopReducer = (
  state = { sortBy: ItemShopSort.BYNAME },
  action: AnyAction
) => {
  switch (action.type) {
    case setShopSorting:
      return { sortBy: action.payload };
    case clearShopSorting:
      return { sortBy: ItemShopSort.BYNAME };
    default:
      return state;
  }
};
