import { useContext, useMemo } from "react";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorResult.module.scss";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { BuyMeACoffeeLink } from "../buyMeACoffeeLink/BuyMeACoffeeLink";

/**
 * A component to show the color palette based on the picked colors and the corresponding scss code.
 */
export const ColorResult: React.FC = () => {
  const { t } = useTranslation();
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
      <HorizontalColorPalette
        colors={simpleColors}
        title={t(texts.colorResult.colorPaletteSimple)}
      />
      <HorizontalColorPalette
        colors={extendedColors}
        title={t(texts.colorResult.colorPaletteExtended)}
      />
      <div className={styles.codeAndDonationButton}>
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
            title={t(texts.colorResult.scssCodeSimple)}
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
            title={t(texts.colorResult.scssCodeExtended)}
          />
        </div>
        <BuyMeACoffeeLink />
      </div>
    </div>
  );
};
