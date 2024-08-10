import { useEffect, useState } from "react";
import styles from "./ColorBar.module.scss";
import { IColorBarProps } from "./IColorBarProps";
import { ColorInfo } from "../../services/colorInfo/ColorInfo";
import { style } from "../../utils/style";

/**
 * A component to pick and show a color and keep track of it.
 */
export const ColorBar: React.FC<IColorBarProps> = (props) => {
  //needs its own color state so that the color picker can be prefilled with a value
  const [color, setColor] = useState(props.color);
  const [pickerInitialized, setPickerInitialized] = useState(false);
  const [showSaturationWarning, setShowSaturationWarning] = useState(false);
  const [saturation, setSaturation] = useState<number>(0);

  const checkSaturationOfColor = (color: string) => {
    const saturation = ColorInfo.getSaturationFromHexColor(color);
    setSaturation(saturation);
    if (saturation > 72) {
      setShowSaturationWarning(true);
    } else {
      setShowSaturationWarning(false);
    }
  };

  useEffect(() => {
    setColor(props.color);
    checkSaturationOfColor(props.color ?? "");
    if (props.color === "") {
      //if the color was reset, the color picker needs initializing
      //so that the color picker color can be set once again
      setPickerInitialized(false);
    }
  }, [props.color]);

  const testColor = color === "" ? "#FFFFFF" : color;

  return (
    <div className={styles.colorBarWithWarning}>
      {showSaturationWarning && (
        <div className={styles.saturationWarningMessage}>
          <div>{`Saturation too high:`}</div>
          <div>{`${saturation}% (best below 72%)`}</div>
        </div>
      )}
      <input
        className={style(
          styles.colorBar,
          props.isProminent ? styles.prominent : "",
          showSaturationWarning ? styles.saturationWarning : ""
        )}
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
    </div>
  );
};
