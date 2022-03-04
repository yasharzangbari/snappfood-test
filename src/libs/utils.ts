import { functions, isEqual, isObject, omit } from "lodash";
import { PropsWithChildren } from "react";

export const areEqual = (
  value: PropsWithChildren<any>,
  other: PropsWithChildren<any>
): boolean => {
  isObject(value) && (value = omit(value, functions(value)));
  isObject(other) && (other = omit(other, functions(other)));
  return isEqual(value, other);
};

export const isDevMod =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
