class CssColorCodeGeneratorDefault {
  private suffixesForThree = ["", "accent", "light"];
  private suffixesForFour = ["dark", "", "accent", "light"];

  private suffixes = new Map<number, string[]>();

  constructor() {
    this.suffixes.set(3, this.suffixesForThree).set(4, this.suffixesForFour);
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
      const suffix = suffixes[index] !== "" ? `_${suffixes[index]}` : "";
      return `${prefix}${suffix}: ${color};`;
    });
  };
}
export const CssColorCodeGenerator = new CssColorCodeGeneratorDefault();
