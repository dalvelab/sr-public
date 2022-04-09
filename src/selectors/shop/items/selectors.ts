import { createSelector } from "reselect";

import { RootState } from "@models/state";
import { isVoid } from "@utils/common";

export const itemsSelector = createSelector(
  (state: RootState) => state.shop.itemsTransaction,
  (items) => items
);

export const singleItemSelector = createSelector(
  (state: RootState) => state.shop.singleItemTransaction,
  (item) => item
);

export const specialOfferItemsSelector = createSelector(
  (state: RootState) => state.shop.itemsTransaction,
  (items) => {
    const { items: data } = items;
    return data.filter((item) => !isVoid(item.attributes.old_price));
  }
);

export const favouriteItemsSelectorIds = createSelector(
  (state: RootState) => state.shop.favouriteItems.items_id,
  (items_id) => items_id
);

export const favouriteItemsSelector = createSelector(
  (state: RootState) => state.shop.favouriteItems.items,
  (items) => items
);
