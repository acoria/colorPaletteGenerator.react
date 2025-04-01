import { useContext, useMemo } from "react";
import { AppConfig } from "../../AppConfig";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { AppContext } from "../../context/AppContext";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { urlParamsColors } from "../../routes/AppRouter";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { CssCode } from "../cssCodeGenerator/CssCode";
import { CssColorCodeGenerator } from "../cssCodeGenerator/CssColorCodeGenerator";
import { HorizontalColorPalette } from "../horizontalColorPalette/HorizontalColorPalette";
import styles from "./ColorResult.module.scss";

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
  const copyColorExampleLinkToClipboard = () => {
    const colors = [
      ...context.primaryColors.value,
      context.accentColor.value,
      ...context.neutralColors.value,
    ].join(";");
    const encoded = btoa(colors);
    const url = `${AppConfig.BASE_URL}?${urlParamsColors}=${encoded}`;
    navigator.clipboard.writeText(url);
  };

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
      <button className={styles.copyColorExampleButton} onClick={copyColorExampleLinkToClipboard}>
        <div className={styles.copyExampleButtonContent}>
          <CopyIcon
            className={styles.copyIconExampleLink}
            onClick={() => copyColorExampleLinkToClipboard}
          />
          <div>{t(texts.colorResult.copyColorExample)}</div>
        </div>
      </button>
      <HorizontalColorPalette
        colors={simpleColors}
        title={t(texts.colorResult.colorPaletteSimple)}
      />
      <HorizontalColorPalette
        colors={extendedColors}
        title={t(texts.colorResult.colorPaletteExtended)}
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
    </div>
  );
};
