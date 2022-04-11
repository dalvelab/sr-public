import { Dispatch } from "redux";

const actionPrefix = "SHOP_SORT";

export const setShopSorting = `${actionPrefix}/SET`;
export const clearShopSorting = `${actionPrefix}/CLEAR`;

export const getShopSortingAction =
  (sortBy: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: setShopSorting,
      payload: sortBy,
    });
  };
