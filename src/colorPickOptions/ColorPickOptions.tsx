import { useState } from "react";
import styles from "./ColorPickOptions.module.css";
import { IColorPickOptionsProps } from "./IColorPickOptionsProps";
import { style } from "../utils/style";

/**
 * A component to show all available colors to pick from for selection.
 */
export const ColorPickOptions: React.FC<IColorPickOptionsProps> = (props) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className={styles.colorPickOptions}>
      <div className={styles.closeButton} onClick={props.onClose}>
        X
      </div>
      {props.colors.map((color) => (
        <div
          key={color}
          className={style(
            styles.singleButton,
            `${color === selectedColor && styles.colorSelected}`
          )}
          style={{ backgroundColor: color }}
          onClick={() => {
            setSelectedColor(color);
            props.onColorChosen?.(color);
          }}
        ></div>
      ))}
    </div>
  );
};
