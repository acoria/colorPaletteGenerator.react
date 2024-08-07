import { useState } from "react";
import { IValue } from "../types/IValue";

export function useValue<T>(initialValue: T): IValue<T> {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
}
