import { Dispatch } from "redux";
import { includes } from "ramda";

import { api, APP_NAME } from "@constants/common";
import { isVoid } from "@utils/common";

const actionPrefix = "SHOP_ITEMS";
const actionSignlePrefix = "SHOP_SINGLE_ITEM";
const actionFavouriteItemsFromLSPrefix = "SHOP_FAVOURITE_ITEMS_LOCAL_STORAGE";
const actionFavouriteItemsPrefix = "SHOP_FAVOURITE_ITEMS";

export const requestItems = `${actionPrefix}/REQUEST`;
export const getItems = `${actionPrefix}/GET`;
export const errorItems = `${actionPrefix}/ERROR`;

export const requestSingleItem = `${actionSignlePrefix}/REQUEST`;
export const getSingleItem = `${actionSignlePrefix}/GET`;
export const errorSingleItem = `${actionSignlePrefix}/ERROR`;

export const getFavouriteItemsFromLS = `${actionFavouriteItemsFromLSPrefix}/GET`;
export const addFavouriteItemToLS = `${actionFavouriteItemsFromLSPrefix}/ADD`;
export const requestFavouriteItems = `${actionFavouriteItemsPrefix}/REQUEST`;
export const getFavouriteItems = `${actionFavouriteItemsPrefix}/GET`;
export const errorFavouriteItems = `${actionFavouriteItemsPrefix}/ERROR`;

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
        }`
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

export const getShopFavoruiteItemsFromLS = () => async (dispatch: Dispatch) => {
  if (isVoid(localStorage.getItem(`${APP_NAME}:favourite-items`))) {
    localStorage.setItem(`${APP_NAME}:favourite-items`, JSON.stringify([]));
  }

  // @ts-ignore
  const items = JSON.parse(localStorage.getItem(`${APP_NAME}:favourite-items`));

  dispatch({
    type: getFavouriteItemsFromLS,
    payload: items,
  });
};

export const addShopFavouriteItem =
  (id: number) => async (dispatch: Dispatch) => {
    const items = JSON.parse(
      // @ts-ignore
      localStorage.getItem(`${APP_NAME}:favourite-items`)
    );

    let newItems;

    if (includes(id, items)) {
      newItems = items.filter((item_id: number) => item_id !== id);

      localStorage.setItem(
        `${APP_NAME}:favourite-items`,
        JSON.stringify(newItems)
      );
    } else {
      newItems = [...items, id];
      localStorage.setItem(
        `${APP_NAME}:favourite-items`,
        JSON.stringify(newItems)
      );
    }

    dispatch({
      type: addFavouriteItemToLS,
      payload: newItems,
    });
  };

export const getAllFavouriteItems =
  (id: Array<number>) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: requestFavouriteItems });

      const { data } = await api.post(
        "/items/favourites?populate[category][fields][0]=category&populate[subcategory][fields][0]=subcategory&populate[brand][fields][0]=brand&populate[image][fields][0]=url",
        {
          id_array: id,
        }
      );

      dispatch({
        type: getFavouriteItems,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: errorFavouriteItems,
      });
    }
  };
