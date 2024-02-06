import { useState } from "react";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorPalette.module.css";

export const ColorPalette: React.FC = () => {
  const [primaryColors, setPrimaryColors] = useState<string[]>([]);
  const [neutralColors, setNeutralColors] = useState<string[]>([]);

  const selectedNeutralColors =
    neutralColors.length > 0
      ? [neutralColors[0], neutralColors[2], neutralColors[4], neutralColors[6]]
      : [];

  return (
    <div className={styles.colorPalette}>
      <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
      <p>
        Go to{" "}
        <a href="https://coolors.co/palettes" target="_blank">
          Coolors.co
        </a>{" "}
        and pick two colors you like from the same color palette.
      </p>
      <div className={styles.colorPickers}>
        <ColorPicker
          title="Primary color"
          numberOfColorsToGenerate={3}
          onColorsChange={setPrimaryColors}
          explanation="Decide which color should be your primary color. Click on the first
        element and use the picker to select this color. Then move left on the
        x-axis towards a lighter color for each following color."
        />
        <ColorPicker
          title="Neutral color"
          numberOfColorsToGenerate={7}
          onColorsChange={setNeutralColors}
          explanation="Pick the second color, then move a little up and left for each color
            until you reach the top and nearly the left with the last color."
        />
        <div>
          <HorizontalColorPalette
            colors={[...primaryColors, ...selectedNeutralColors]}
            title={"Color palette"}
          />
          {/* <CssCode colors={selectedNeutralColors} prefix="neutral" /> */}
          <HorizontalColorPalette
            colors={[...primaryColors, ...neutralColors]}
            title={"Extended color palette"}
          />
          <div className={styles.code}>
            {primaryColors.length > 0 && (
              <>
                {" "}
                <CssCode
                  code={[
                    ...CssColorCodeGenerator.generate(primaryColors, "primary"),
                    ...CssColorCodeGenerator.generate(
                      selectedNeutralColors,
                      "neutral"
                    ),
                  ]}
                  title="SCSS code"
                />
                <CssCode
                  code={[
                    ...CssColorCodeGenerator.generate(primaryColors, "primary"),
                    ...CssColorCodeGenerator.generate(neutralColors, "neutral"),
                  ]}
                  title="SCSS code extended"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
