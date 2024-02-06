export interface IColorGeneratorProps {
  initialColor?: string;
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
}
