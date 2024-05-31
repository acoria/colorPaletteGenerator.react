import { IColorInfo } from "./IColorInfo";

class ColorInfoDefault implements IColorInfo {
  convertHexToRGB(hexColor: string) {
    const color = this.removeHashIfNecessary(hexColor);
    return [
      this.hexToDecimal(color.substring(0, 2)),
      this.hexToDecimal(color.substring(2, 4)),
      this.hexToDecimal(color.substring(4, 6)),
    ];
  }

  getSaturationFromHexColor(hexColor: string): number {
    if (hexColor === "") {
      return -1;
    }
    const rgb = this.convertHexToRGB(this.removeHashIfNecessary(hexColor));
    const maxValue = Math.max(...rgb) / 255;
    const minValue = Math.min(...rgb) / 255;

    const delta = maxValue - minValue;
    if (delta === 0) {
      return 0;
    }
    const lightness = this.getLightness(maxValue, minValue);

    return Math.round((delta / (1 - Math.abs(2 * lightness - 1))) * 100);
  }

  private removeHashIfNecessary(hexColor: string): string {
    if (hexColor === undefined) {
      return "";
    }
    if (hexColor.charAt(0) === "#") {
      return hexColor.substring(1, 7);
    } else {
      return hexColor;
    }
  }

  private getLightness(minValue: number, maxValue: number): number {
    return (minValue + maxValue) / 2;
  }

  private hexToDecimal(hexNumber: string): number {
    return parseInt(hexNumber, 16);
  }
}
export const ColorInfo = new ColorInfoDefault();
