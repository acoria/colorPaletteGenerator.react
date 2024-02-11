import { ReactNode } from "react";

export interface IColorPickerProps {
  title: string | ReactNode;
  explanation: string;
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
  initialColor?: string;
}
