import { isNil } from "ramda";

import { notEmpty } from "@utils/index";

import AbstractUrl from "./AbstractUrl";
import { IGetParams, IUrl } from "./models";

interface IOptions {
  version?: number;
  params?: IGetParams;
}
abstract class ApiUrl extends AbstractUrl implements IUrl {
  readonly host;

  static host = "";

  readonly appPath;

  static appPath = "";

  readonly rootPath: string = "/api";

  readonly path: string;

  readonly version: number;

  params?: IGetParams;

  protected constructor(
    path: string,
    { version = 1, params }: IOptions = { version: 1 }
  ) {
    super();
    path = path.trim();
    this.host = ApiUrl.host;
    this.appPath = ApiUrl.appPath;
    this.path = path;
    this.version = version;

    if (!isNil(params) && notEmpty(params)) {
      this.params = params;
    }
  }

  static setHost(host: string) {
    ApiUrl.host = host;
  }

  static setAppPath(appPath: string) {
    ApiUrl.appPath = appPath;
  }

  getOrigin() {
    return `${this.host}${this.rootPath}/v${this.version}${this.appPath}`;
  }

  getBase() {
    return `${this.getOrigin()}${this.path}`;
  }
}

export default ApiUrl;
