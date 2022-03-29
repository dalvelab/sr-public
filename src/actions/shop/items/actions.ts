import { IItem } from "@models/data";

const actionPrefix = "SHOP_ITEMS";

export const requestItems = `${actionPrefix}/REQUEST`;
export const getItems = `${actionPrefix}/GET`;
export const errorItems = `${actionPrefix}/ERROR`;
