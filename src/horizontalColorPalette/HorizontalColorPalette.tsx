import styles from "./HorizontalColorPalette.module.css";
import { IHorizontalColorPaletteProps } from "./IHorizontalColorPaletteProps";

export const HorizontalColorPalette: React.FC<IHorizontalColorPaletteProps> = (
  props
) => {
  return (
    <div className={styles.generatedPalette}>
      <h4>{props.title}</h4>
      <div className={styles.horizontalPalette}>
        {props.colors.map((primaryColor) => (
          <div
            className={styles.horizontalPaletteBar}
            style={{ backgroundColor: primaryColor }}
          >
            <div className={styles.hexCodeDark}>{primaryColor}</div>
            <div className={styles.hexCodeLight}>{primaryColor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
