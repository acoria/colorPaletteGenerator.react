class CssColorCodeGeneratorDefault {
  private suffixesForOne = [""];
  private suffixesForSeven = [
    "darkest",
    "darker",
    "dark",
    "",
    "light",
    "lighter",
    "lightest",
  ];
  private suffixesForFive = ["darker", "dark", "", "light", "lighter"];

  private suffixes = new Map<number, string[]>();

  constructor() {
    this.suffixes
      .set(1, this.suffixesForOne)
      .set(5, this.suffixesForFive)
      .set(7, this.suffixesForSeven);
  }

  private buildSuffixesByLengthOfColors(colors: string[]): string[] {
    const suffixes: string[] = [];
    colors.forEach((_, index) => suffixes?.push(`${colors.length - index}00`));
    return suffixes;
  }

  private findSuffixes = (colors: string[]) => {
    const numberOfColors = colors.length;
    if (numberOfColors === 0) {
      return;
    }
    let suffixes = this.suffixes.get(numberOfColors);
    if (suffixes === undefined) {
      suffixes = this.buildSuffixesByLengthOfColors(colors);
    }
    return suffixes;
  };

  generate = (colors: string[], prefix: string): string[] => {
    const suffixes = this.findSuffixes(colors);
    if (suffixes === undefined) {
      return [];
    }
    return colors.map((color, index) => {
      const suffix = suffixes[index] !== "" ? `-${suffixes[index]}` : "";
      return `${prefix}${suffix}: ${color};`;
    });
  };
}
export const CssColorCodeGenerator = new CssColorCodeGeneratorDefault();
