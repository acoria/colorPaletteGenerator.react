export interface IColorPickerProps {
  numberOfColorsToGenerate: number;
  onColorsChange?: (colors: string[]) => void;
  /**
   * The color of the first bar. It will be initialized with it and the rest of the bars stay empty.
   */
  initialTopColor?: string;
  /**
   * All colors to initialize all the bars with.
   */
  allInitialColors?: string[];
}
