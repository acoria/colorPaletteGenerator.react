
export interface IColorPickerProps {
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
  initialColor?: string;
}
