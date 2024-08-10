import { ColorInfo } from "../../services/colorInfo/ColorInfo";
import styles from "./HorizontalColorPalette.module.css";
import { IHorizontalColorPaletteProps } from "./IHorizontalColorPaletteProps";

export const HorizontalColorPalette: React.FC<IHorizontalColorPaletteProps> = (
  props
) => {
  return (
    <div className={styles.generatedPalette}>
      <h4>{props.title}</h4>
      <div className={styles.horizontalPalette}>
        {props.colors.map((hexColor, index) => {
          if (hexColor === "") {
            return "";
          }
          const rgb = (
            ColorInfo.convertHexToRGB(hexColor) as unknown as string[]
          ).reduce((previous, current) => `${previous} ${current}`);
          const rgbText = `RGB ${rgb}`;
          return (
            <div
              className={styles.horizontalPaletteBar}
              style={{ backgroundColor: hexColor }}
              key={`${hexColor}_${index}`}
            >
              <div className={styles.colorCodeDark}>{hexColor}</div>
              <div className={styles.colorCodeDark}>{rgbText}</div>
              <div className={styles.colorCodeLight}>{hexColor}</div>
              <div className={styles.colorCodeLight}>{rgbText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
