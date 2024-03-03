import { ReactNode } from "react";

export interface IColorPaletteStepProps {
  title: string | ReactNode;
  explanation: string | ReactNode;
  children?: ReactNode;
}
