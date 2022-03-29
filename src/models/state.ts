import { ICategory, IItem } from "./data";

export interface RootState {
  shop: {
    categoriesTransaction: {
      loading: boolean;
      categories: ICategory[];
    };
    itemsTransaction: {
      loading: boolean;
      items: IItem[];
      count: number;
    };
  };
}
