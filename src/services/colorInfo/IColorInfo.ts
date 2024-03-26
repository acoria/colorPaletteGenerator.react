export interface IColorInfo {
  /**
   * Returns the saturation of a color in percent
   */
  getSaturationFromHexColor(hexColor: string): number;
  convertHexToRGB(hexColor: string): number[];
}
