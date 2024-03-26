export class HexColorsParser {
  parse(hexColorsString: string): string[]{
//   parse(): string[] {
    const hexColors: string[] = [];
    // const hexColorsString = "#09233e #31557c;";
    // const hexColorsString = "$primary: #09233e; $primary_accent: #31557c;";
    const colorParts = hexColorsString.split("#");
    colorParts.forEach((colorPart, index) => {
      //is first element a color?
      if (
        index === 0 &&
        (colorPart === "" || hexColorsString.charAt(0) !== "#")
      ) {
        return;
      } else {
        hexColors.push(`#${colorPart.slice(0, 6)}`);
      }
    });    return hexColors;
  }
}
