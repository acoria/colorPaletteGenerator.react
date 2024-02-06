import { useEffect, useState } from "react";
import styles from "./ColorBar.module.css";
import { IColorBarProps } from "./IColorBarProps";

export const ColorBar: React.FC<IColorBarProps> = (props) => {
  const [color, setColor] = useState(props.color);
  const [pickerInitialized, setPickerInitialized] = useState(false);

  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  return (
    <input
      className={styles.colorBar}
      style={{
        color: props.color,
        backgroundColor: "transparent",
      }}
      type="color"
      value={color}
      onChange={(event) => {
        props.onColorChange?.(event.target.value);
        setColor(event.target.value);
      }}
      onClick={() => {
        if (!pickerInitialized && props.initialColorPickerColor) {
          setColor(props.initialColorPickerColor);
          setPickerInitialized(true);
        }
      }}
    />
  );
};
