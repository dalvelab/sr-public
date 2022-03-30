import { Dispatch } from "redux";

import { api } from "@constants/common";

const actionPrefix = "ITEMS_COUNT";

export const requestItemsCount = `${actionPrefix}/REQUEST`;
export const getItemsCount = `${actionPrefix}/GET`;
export const errorItemsCount = `${actionPrefix}/ERROR`;

export const getUniqueItemsCount = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: requestItemsCount });

    const { data } = await api.get("items/count");

    dispatch({
      type: getItemsCount,
      payload: data.count,
    });
  } catch (error) {
    dispatch({
      type: errorItemsCount,
    });
  }
};
