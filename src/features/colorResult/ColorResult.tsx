import { useContext, useMemo } from "react";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorResult.module.scss";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";

/**
 * A component to show the color palette based on the picked colors and the corresponding scss code.
 */
export const ColorResult: React.FC = () => {
  const prefixPrimary = "$color-primary";
  const prefixAccent = "$color-accent";
  const prefixSecondary = "$color-secondary";
  const context = useContext(AppContext);
  const limitedNeutralColorSelector = useMemo(
    () => new LimitedNeutralColorsSelector(),
    []
  );

  const simpleColors = [
    ...context.primaryColors.value,
    context.accentColor.value,
    ...limitedNeutralColorSelector.select(context.neutralColors.value),
  ];

  const extendedColors = [
    ...context.primaryColors.value,
    context.accentColor.value,
    ...context.neutralColors.value,
  ];

  return (
    <div className={styles.colorResult}>
      <HorizontalColorPalette colors={simpleColors} title={"Color palette"} />
      <HorizontalColorPalette
        colors={extendedColors}
        title={"Extended color palette"}
      />
      <div className={styles.codeSnippets}>
        <CssCode
          code={[
            ...CssColorCodeGenerator.generate(
              context.primaryColors.value,
              prefixPrimary
            ),
            ...CssColorCodeGenerator.generate(
              [context.accentColor.value],
              prefixAccent
            ),
            ...CssColorCodeGenerator.generate(
              limitedNeutralColorSelector.select(context.neutralColors.value),
              prefixSecondary
            ),
          ]}
          title="SCSS code"
        />
        <CssCode
          code={[
            ...CssColorCodeGenerator.generate(
              context.primaryColors.value,
              prefixPrimary
            ),
            ...CssColorCodeGenerator.generate(
              [context.accentColor.value],
              prefixAccent
            ),
            ...CssColorCodeGenerator.generate(
              context.neutralColors.value,
              prefixSecondary
            ),
          ]}
          title="SCSS code extended"
        />
      </div>
    </div>
  );
};
