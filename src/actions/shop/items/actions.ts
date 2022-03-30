import { Dispatch } from "redux";

import { api } from "@constants/common";

const actionPrefix = "SHOP_ITEMS";
const actionSignlePrefix = "SHOP_SIGNLE_ITEM";

export const requestItems = `${actionPrefix}/REQUEST`;
export const getItems = `${actionPrefix}/GET`;
export const errorItems = `${actionPrefix}/ERROR`;
export const requestSingleItem = `${actionSignlePrefix}/REQUEST`;
export const getSingleItem = `${actionSignlePrefix}/GET`;
export const errorSingleItem = `${actionSignlePrefix}/ERROR`;

export const getShopItems =
  (search: string | null, category: string | null) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: requestItems });

      const { data } = await api.get(
        `/items?${
          search ? `filters[title][$containsi]=${search}` : ""
        }&populate[category][fields][0]=category&populate[subcategory][fields][0]=subcategory&populate[brand][fields][0]=brand&populate[image][fields][0]=url${
          category ? `&filters[category][category][$containsi]=${category}` : ""
        }&pagination[page]=1&pagination[pageSize]=50`
      );

      dispatch({
        type: getItems,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: errorItems,
      });
    }
  };

export const getShopSingleItem =
  (slug?: string | null) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: requestSingleItem });

      const { data } = await api.get(
        `/items/${slug}?populate[category][fields][0]=category&populate[subcategory][fields][0]=subcategory&populate[brand][fields][0]=brand&populate[image][fields][0]=url`
      );

      dispatch({
        type: getSingleItem,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: errorSingleItem,
      });
    }
  };
