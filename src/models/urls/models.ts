export type IGetParams = Record<string, any>;

export interface IUrl {
  readonly host: string;
  readonly path: string;
  params?: IGetParams;
  setParams(params: IGetParams): void;
  getBase(): string;
}

export interface IParsedURL {
  scheme?: string;
  domain: string;
  path: string;
  port?: string;
  origin: string;
  query?: string;
  hash?: string;
  queryParams: IGetParams;
}
