import { createSelector } from "reselect";

import { RootState } from "@models/state";

export const itemsSelector = createSelector(
  (state: RootState) => state.shop.itemsTransaction,
  (items) => items
);

export const singleItemSelector = createSelector(
  (state: RootState) => state.shop.singleItemTransaction,
  (item) => item
);
