import { ICategory, IItem } from "./data";

export interface RootState {
  shop: {
    sorting: {
      sortBy: string | undefined;
    };
    categoriesTransaction: {
      loading: boolean;
      categories: ICategory[];
    };
    itemsTransaction: {
      loading: boolean;
      items: IItem[];
      count: number;
    };
    singleItemTransaction: {
      loading: boolean;
      item: IItem;
    };
    favouriteItems: {
      items_id: {
        id: Array<number>;
      };
      items: {
        loading: boolean;
        items: IItem[];
      };
    };
  };
  count: {
    items: {
      loading: boolean;
      count: number;
    };
  };
}
