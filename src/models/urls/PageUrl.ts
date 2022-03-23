import { isVoid } from "@utils/index";

import AbstractUrl from "./AbstractUrl";
import { IGetParams, IUrl } from "./models";

/**
 * @description Класс для создания пути(ссылки) web-страницы
 * @param  path - string
 * @param  params - IGetParams
 * @use Используется для навигации в приложении
 *
 */
abstract class PageUrl extends AbstractUrl implements IUrl {
  readonly host = "";

  readonly path: string;

  params?: IGetParams;

  abstract readonly rootPath: string;

  protected constructor(path: string, params?: IGetParams) {
    super();
    path = path.trim();

    this.path = path;

    if (!isVoid(params)) {
      this.params = params;
    }
  }

  getOrigin() {
    return `${this.host}${this.rootPath}`;
  }
}

export default PageUrl;
