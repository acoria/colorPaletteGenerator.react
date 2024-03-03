import { SetStateAction } from "react";

export interface IValue<T> {
  value: T;
  setValue: (newValue: SetStateAction<T>) => void;
}
