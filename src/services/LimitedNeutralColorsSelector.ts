/**
 * This service selects a limited number of neutral colors for the color palette
 */
export class LimitedNeutralColorsSelector {
  select(neutralColors: string[]): string[] {
    return neutralColors.length > 0
      ? [
          neutralColors[0],
          neutralColors[1],
          neutralColors[2],
          neutralColors[4],
          neutralColors[6],
        ]
      : [];
  }
}
