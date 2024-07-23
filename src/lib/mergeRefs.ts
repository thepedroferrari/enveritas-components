import { ForwardedRef, RefCallback } from "react";

export function mergeRefs<T>(...refs: Array<ForwardedRef<T>>): RefCallback<T> {
  return (element: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(element);
      } else if (ref !== null) {
        ref.current = element;
      }
    });
  };
}
