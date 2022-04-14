import { createSelector } from "reselect";

import { RootState } from "@models/state";

export const shopSortSelector = createSelector(
  (state: RootState) => state.shop.sorting,
  (sorting) => sorting
);
