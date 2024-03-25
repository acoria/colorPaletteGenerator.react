import { IColorInfo } from "./IColorInfo";

class ColorInfoDefault implements IColorInfo {
  getSaturationFromHexColor(hexColor: string): number {
    if (hexColor.charAt(0) === "#") {
      hexColor = hexColor.substring(1, 7);
    } else if (hexColor === "") {
      return -1;
    }

    const rgb = this.convertHexToRGB(hexColor);
    const maxValue = Math.max(...rgb) / 255;
    const minValue = Math.min(...rgb) / 255;

    const delta = maxValue - minValue;
    if (delta === 0) {
      return 0;
    }
    const lightness = this.getLightness(maxValue, minValue);

    return Math.round((delta / (1 - Math.abs(2 * lightness - 1))) * 100);
  }

  private getLightness(minValue: number, maxValue: number): number {
    return (minValue + maxValue) / 2;
  }

  private convertHexToRGB(hexColor: string) {
    return [
      this.hexToDecimal(hexColor.substring(0, 2)),
      this.hexToDecimal(hexColor.substring(2, 4)),
      this.hexToDecimal(hexColor.substring(4, 6)),
    ];
  }

  private hexToDecimal(hexNumber: string): number {
    return parseInt(hexNumber, 16);
  }
}
export const ColorInfo = new ColorInfoDefault();
