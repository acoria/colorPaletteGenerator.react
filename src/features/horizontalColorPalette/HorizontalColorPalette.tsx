import { ColorInfo } from "../../services/colorInfo/ColorInfo";
import styles from "./HorizontalColorPalette.module.scss";
import { IHorizontalColorPaletteProps } from "./IHorizontalColorPaletteProps";
import { ReactComponent as VisibilityOn } from "../../assets/visibility_on.svg";
import { ReactComponent as VisibilityOff } from "../../assets/visibility_off.svg";
import { useState } from "react";

export const HorizontalColorPalette: React.FC<IHorizontalColorPaletteProps> = (
  props
) => {
  const [showColorCodes, setShowColorCodes] = useState<boolean>(true);

  return (
    <div className={styles.generatedPalette}>
      <div className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        {showColorCodes ? (
          <VisibilityOff
            className={styles.visibilityIcon}
            onClick={() => {
              setShowColorCodes((previous) => !previous);
            }}
          />
        ) : (
          <VisibilityOn
            className={styles.visibilityIcon}
            onClick={() => {
              setShowColorCodes((previous) => !previous);
            }}
          />
        )}
      </div>
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
              <div className={styles.colorCodeDark}>
                {showColorCodes && hexColor}
              </div>
              <div className={styles.colorCodeDark}>
                {showColorCodes && rgbText}
              </div>
              <div className={styles.colorCodeLight}>
                {showColorCodes && hexColor}
              </div>
              <div className={styles.colorCodeLight}>
                {showColorCodes && rgbText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
