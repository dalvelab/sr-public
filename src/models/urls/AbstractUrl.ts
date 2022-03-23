import { mergeLeft } from "ramda";

import { IGetParams, IUrl } from "./models";

abstract class AbstractUrl implements IUrl {
  abstract readonly host: string;

  abstract readonly rootPath: string;

  abstract readonly path: string;

  abstract params?: IGetParams;

  getBase() {
    return `${this.host}${this.rootPath}${this.path}`;
  }

  setParams(params: IGetParams) {
    this.params = mergeLeft(this.params || {}, params);
  }
}

export default AbstractUrl;
