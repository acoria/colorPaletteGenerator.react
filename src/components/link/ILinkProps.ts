import { ReactNode } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface ILinkProps extends IHaveClassName {
  children: ReactNode | ReactNode[];
  to: string;
  openInNewTab?: boolean;
}
