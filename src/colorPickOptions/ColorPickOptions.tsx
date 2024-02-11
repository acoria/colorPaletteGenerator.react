import { useMemo, useState } from "react";
import styles from "./ColorPickOptions.module.css";
import { IColorPickOptionsProps } from "./IColorPickOptionsProps";

export const ColorPickOptions: React.FC<IColorPickOptionsProps> = (props) => {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = useMemo<string[]>(
    () => [...props.colors, "white", "black"],
    [props.colors]
  );

  return (
    <div className={styles.colorPickOptions}>
      <div className={styles.closeButton} onClick={props.onClose}>
        X
      </div>
      {colors.map((color) => (
        <div
          className={`${styles.singleButton} ${
            color === selectedColor && styles.colorSelected
          }`}
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
