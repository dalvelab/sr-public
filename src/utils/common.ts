interface INullObject {
  valueOf(): null;
}

export function isEmptyArray(variable: unknown) {
  return Array.isArray(variable) && variable.length === 0;
}

export function isEmptyString(variable: any) {
  return typeof variable === "string" && variable === "";
}

export const isEmptyObject = (
  variable: unknown
): variable is { [key: string]: never } | INullObject =>
  typeof variable === "object" &&
  variable !== null &&
  ((variable.constructor.prototype === Object.prototype &&
    Object.getOwnPropertyNames(variable).length === 0) ||
    variable.valueOf() === null);

export const isVoid = (
  variable: unknown
): variable is null | undefined | void | never | INullObject =>
  typeof variable === "undefined" ||
  (typeof variable === "object" &&
    (variable === null || variable.valueOf() === null));

export const isEmpty = (
  variable: unknown
): variable is
  | null
  | undefined
  | void
  | ""
  | never
  | never[]
  | { [key: string]: never } =>
  isVoid(variable) ||
  isEmptyString(variable) ||
  isEmptyArray(variable) ||
  isEmptyObject(variable);

export const notEmpty = <T>(
  variable:
    | T
    | null
    | undefined
    | void
    | ""
    | never
    | never[]
    | { [key: string]: never }
): variable is T => !isEmpty(variable);
