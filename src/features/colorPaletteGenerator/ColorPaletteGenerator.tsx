import { useContext, useMemo } from "react";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { ColorPaletteResult } from "../colorPaletteResult/ColorPaletteResult";
import { ColorPaletteStepList } from "../colorPaletteStepList/colorPaletteStepList/ColorPaletteStepList";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";
import { DesignExamples } from "../designExamples/DesignExamples";
import styles from "./ColorPaletteGenerator.module.css";

/**
 * An application to generate a color palette, show the SCSS code for it and generate design examples from it
 */
export const ColorPaletteGenerator: React.FC = () => {
  const context = useContext(AppContext);
  const selectedNeutralColors = useMemo(() => {
    return new LimitedNeutralColorsSelector().select(
      context.neutralColors.value
    );
  }, [context.neutralColors]);

  const colorsPicked =
    context.primaryColors.value.length > 0 &&
    context.primaryColors.value[0] !== "";

  return (
    <div className={styles.colorPalette}>
      <ColorPaletteStepList
        onSetPrimaryColors={context.primaryColors.setValue}
        onSetNeutralColors={context.neutralColors.setValue}
      />
      <div>
        <div className={styles.code}>
          {colorsPicked && (
            <>
              <CssCode
                code={[
                  ...CssColorCodeGenerator.generate(
                    context.primaryColors.value,
                    "$primary"
                  ),
                  ...CssColorCodeGenerator.generate(
                    selectedNeutralColors,
                    "$neutral"
                  ),
                ]}
                title="SCSS code"
              />
              <CssCode
                code={[
                  ...CssColorCodeGenerator.generate(
                    context.primaryColors.value,
                    "$primary"
                  ),
                  ...CssColorCodeGenerator.generate(
                    context.neutralColors.value,
                    "$neutral"
                  ),
                ]}
                title="SCSS code extended"
              />
            </>
          )}
        </div>
      </div>
      {colorsPicked && (
        <DesignExamples
          colors={[...context.primaryColors.value, ...selectedNeutralColors]}
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
