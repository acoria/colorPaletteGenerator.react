export interface IColorPickerProps {
  title: string;
  explanation: string;
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
}
