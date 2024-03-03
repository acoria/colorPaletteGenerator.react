import { useContext, useMemo } from "react";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorPaletteResult.module.css";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";

export const ColorPaletteResult: React.FC = () => {
  const context = useContext(AppContext);
  const limitedNeutralColorSelector = useMemo(
    () => new LimitedNeutralColorsSelector(),
    []
  );

  return (
    <div>
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
              "$primary"
            ),
            ...CssColorCodeGenerator.generate(
              limitedNeutralColorSelector.select(context.neutralColors.value),
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
      </div>
    </div>
  );
};
