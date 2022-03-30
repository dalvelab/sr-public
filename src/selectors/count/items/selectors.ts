import { createSelector } from "reselect";

import { RootState } from "@models/state";

export const uniqueItemsCountSelector = createSelector(
  (state: RootState) => state.count.items,
  (count) => count
);
