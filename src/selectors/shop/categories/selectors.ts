import { createSelector } from "reselect";

import { RootState } from "@models/state";

export const categoriesSelector = createSelector(
  (state: RootState) => state.shop.categoriesTransaction,
  (categories) => categories
);
