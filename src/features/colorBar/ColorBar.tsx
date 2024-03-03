import { useEffect, useState } from "react";
import styles from "./ColorBar.module.scss";
import { IColorBarProps } from "./IColorBarProps";

/**
 * A component to pick and show a color and keep track of it.
 */
export const ColorBar: React.FC<IColorBarProps> = (props) => {
  //needs its own color state so that the color picker can be prefilled with a value
  const [color, setColor] = useState(props.color);
  const [pickerInitialized, setPickerInitialized] = useState(false);

  useEffect(() => {
    setColor(props.color);
    if (props.color === "") {
      //if the color was reset, the color picker needs initializing
      //so that the color picker color can be set once again
      setPickerInitialized(false);
    }
  }, [props.color]);

  const testColor = color === "" ? "#FFFFFF" : color;

  return (
    <input
      className={styles.colorBar}
      style={{
        color: props.color,
        backgroundColor: "transparent",
      }}
      type="color"
      value={testColor}
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
