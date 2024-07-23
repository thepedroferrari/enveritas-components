type FalsyLiteral = false | 0 | "" | null | undefined;
type Falsy<T> = T & (FalsyLiteral | number);
type Truthy<T> = Exclude<T, FalsyLiteral>;
export const isFalsy = <T>(val: T): val is Falsy<T> => !val;
export const isTruthy = <T>(val: T): val is Truthy<T> => !isFalsy(val);
