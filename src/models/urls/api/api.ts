import { ApiUrl, IUrl } from "../";

export class ApiStrapiUrl extends ApiUrl implements IUrl {
  readonly host = "http://admin.stresheniya.ru";

  readonly appPath = "";

  static countItems = () => {
    return new ApiStrapiUrl("/items/count", { version: 1 });
  };

  static countCategoriesWithItems = () => {
    return new ApiStrapiUrl("/items/count/categories", { version: 1 });
  };

  static searchItems = () => {
    return new ApiStrapiUrl("/items", { version: 1 });
  };
}
