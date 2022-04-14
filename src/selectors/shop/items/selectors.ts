import { always, cond, equals, T } from "ramda";
import { createSelector } from "reselect";

import { RootState } from "@models/state";
import { ItemShopSort } from "@models/sort";
import { isVoid } from "@utils/common";

import { shopSortSelector } from "../sorting";

export const itemsSelector = createSelector(
  (state: RootState) => state.shop.itemsTransaction,
  (items) => items
);

export const itemsSortedSelector = createSelector(
  itemsSelector,
  shopSortSelector,
  (itemsShop, sortShop) => {
    const { items } = itemsShop;
    const { sortBy } = sortShop;

    if (equals(ItemShopSort.BYNAME, sortBy)) {
      return items.sort((a, b) =>
        a.attributes.title.localeCompare(b.attributes.title)
      );
    }

    if (equals(ItemShopSort.PRICEDECREASE, sortBy)) {
      return items.sort((a, b) => b.attributes.price - a.attributes.price);
    }

    if (equals(ItemShopSort.PRICEINCREASE, sortBy)) {
      return items.sort((a, b) => a.attributes.price - b.attributes.price);
    }

    return items;
  }
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
