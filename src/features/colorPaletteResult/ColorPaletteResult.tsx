import { useContext, useMemo } from "react";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorPaletteResult.module.scss";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";

export const ColorPaletteResult: React.FC = () => {
  const prefixPrimary = "$color-primary";
  const prefixSecondary = "$color-secondary";
  const context = useContext(AppContext);
  const limitedNeutralColorSelector = useMemo(
    () => new LimitedNeutralColorsSelector(),
    []
  );

  return (
    <div className={styles.colorPaletteResult}>
      <HorizontalColorPalette
        colors={[
          ...context.primaryColors.value,
          ...limitedNeutralColorSelector.select(context.neutralColors.value),
        ]}
        title={"Color palette"}
      />
      <HorizontalColorPalette
        colors={[
          ...context.primaryColors.value,
          ...context.neutralColors.value,
        ]}
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
