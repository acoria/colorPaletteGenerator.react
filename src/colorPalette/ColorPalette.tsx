import { ReactNode, useState } from "react";
import { ReactComponent as CircleWithOne } from "../assets/circleWithOne.svg";
import { ReactComponent as CircleWithThree } from "../assets/circleWithThree.svg";
import { ReactComponent as CircleWithTwo } from "../assets/circleWithTwo.svg";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { ColorPicker } from "../colorPicker/ColorPicker";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";
import { DesignExamples } from "../designExamples/DesignExamples";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorPalette.module.css";

/**
 * An application to create a color palette, show the SCSS code for it and generate design examples from it
 */
export const ColorPalette: React.FC = () => {
  const [primaryColors, setPrimaryColors] = useState<string[]>([]);
  const [neutralColors, setNeutralColors] = useState<string[]>([]);

  const selectedNeutralColors =
    neutralColors.length > 0
      ? [neutralColors[0], neutralColors[2], neutralColors[4], neutralColors[6]]
      : [];

  const colorTitle = (component: ReactNode, title: string) => (
    <div className={styles.colorTitle}>
      {component}
      <h4 className={styles.colorTitleText}>{title}</h4>
    </div>
  );

  const colorsPicked = primaryColors.length > 0;

  return (
    <div className={styles.colorPalette}>
      <div className={styles.header}>
        <ColorPaletteIcon className={styles.colorPaletteIcon} />
        <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
      </div>
      <div className={styles.colorPaletteBody}>
        <div className={styles.firstStep}>
          <CircleWithOne className={styles.circleWithNumber} />
          <p>
            Go to{" "}
            <a href="https://coolors.co/palettes" target="_blank">
              Coolors.co
            </a>{" "}
            or take any other color palette and pick two colors you like from
            the same color palette.
          </p>
        </div>
        <div className={styles.secondStep}>
          <ColorPicker
            title={colorTitle(
              <CircleWithTwo className={styles.circleWithNumber} />,
              "Pick primary Color"
            )}
            numberOfColorsToGenerate={3}
            onColorsChange={setPrimaryColors}
            explanation="Decide which color should be your primary color. Click on the first
        element and use the picker to select this color. Then move left on the
        x-axis towards a lighter color for each following element."
          />
        </div>
        <div>
          <ColorPicker
            title={colorTitle(
              <CircleWithThree className={styles.circleWithNumber} />,
              "Pick neutral color"
            )}
            numberOfColorsToGenerate={7}
            onColorsChange={setNeutralColors}
            explanation="Pick the second color, then move a little up and left for each color
            until you reach the top and nearly the left with the last color."
          />
        </div>
      </div>
      <div className={styles.colorPaletteBody}>
        {colorsPicked && (
          <HorizontalColorPalette
            colors={[...primaryColors, ...selectedNeutralColors]}
            title={"Color palette"}
          />
        )}
        {colorsPicked && (
          <HorizontalColorPalette
            colors={[...primaryColors, ...neutralColors]}
            title={"Extended color palette"}
          />
        )}
        <div className={styles.code}>
          {colorsPicked && (
            <>
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
      {colorsPicked && (
        <DesignExamples
          colors={[...primaryColors, ...selectedNeutralColors]}
          className={styles.designExamples}
        />
      )}
      {/* <DesignExamples
        className={styles.designExamples}
        colors={[
          "#FE8E19",
          "#FFA648",
          "#FEDDBA",
          "#033465",
          "#1d6dc3",
          "#2367A8",
          "#E7F3FF",
        ]}
      /> */}
    </div>
  );
};
