import { useState } from "react";
import { ColorPaletteStepList } from "../colorPaletteStepList/colorPaletteStepList/ColorPaletteStepList";
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

  const colorsPicked = primaryColors.length > 0;

  return (
    <div className={styles.colorPalette}>
      <ColorPaletteStepList
        onSetPrimaryColors={setPrimaryColors}
        onSetNeutralColors={setNeutralColors}
      />
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
