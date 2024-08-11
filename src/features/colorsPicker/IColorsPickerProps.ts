export interface IColorsPickerProps {
  numberOfColorsToGenerate: number;
  positionOfMainColor?: number;
  hintTextForMainColor?: string;
  onColorsChange?: (colors: string[]) => void;
  /**
   * The color of the first bar. It will be initialized with it and the rest of the bars stay empty.
   */
  initialMainColor?: string;
  /**
   * All colors to initialize all the bars with.
   */
  allInitialColors?: string[];
}
