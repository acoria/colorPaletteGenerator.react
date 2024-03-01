import { ReactNode } from "react";

export interface IColorPickerProps {
  title: string | ReactNode;
  explanation: string | ReactNode;
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
  initialColor?: string;
}
