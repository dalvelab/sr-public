import { PageUrl, IUrl } from "../";

export class RouterUrl extends PageUrl implements IUrl {
  readonly rootPath = "";

  static root() {
    return new RouterUrl("/");
  }

  static shop() {
    return new RouterUrl("/shop");
  }

  static shopItem() {
    return new RouterUrl("/shop/:id");
  }

  static about() {
    return new RouterUrl("/about");
  }

  static shipAndPayment() {
    return new RouterUrl("/ship-and-payment");
  }

  static favourite() {
    return new RouterUrl("/favourite");
  }

  static contacts() {
    return new RouterUrl("/contacts");
  }
}
