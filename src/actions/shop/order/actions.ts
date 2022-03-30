import { Dispatch } from "redux";

import { api } from "@constants/common";
import { Order } from "@models/data";

const actionPrefix = "SHOP_ORDER_CREATE";

export const requestCreateOrder = `${actionPrefix}/REQUEST`;
export const createOrder = `${actionPrefix}/CREATE`;
export const errorCreateOrder = `${actionPrefix}/ERROR`;

export const createShopOrder = (order: Order) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: requestCreateOrder });

    await api.post("/orders", { data: order });

    dispatch({
      type: createOrder,
    });
  } catch (error) {
    dispatch({
      type: errorCreateOrder,
    });
  }
};
