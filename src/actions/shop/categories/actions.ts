import { Dispatch } from "redux";

import { api } from "@constants/common";

const actionPrefix = "SHOP_CATEGORIES";

export const requestCategories = `${actionPrefix}/REQUEST`;
export const getCategories = `${actionPrefix}/GET`;
export const errorCategories = `${actionPrefix}/ERROR`;

export const getUniqueCategories = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: requestCategories });

    const { data } = await api.get(
      `/items/count/categories?populate[0]=category&populate[1]=category.image`
    );

    dispatch({
      type: getCategories,
      payload: data.data.categories,
    });
  } catch (error) {
    dispatch({
      type: errorCategories,
    });
  }
};
