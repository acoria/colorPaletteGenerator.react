import { IValue } from "../types/IValue";

export interface IAppContext {
  primaryColors: IValue<string[]>;
  neutralColors: IValue<string[]>;
}
