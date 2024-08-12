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
  const [color, setColor] = useState<string | undefined>(props.color);
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
  }, [props.color]);

  //set color to white, so the input is not initially black
  const inputColor = color === "" || color === undefined ? "#FFFFFF" : color;

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
        value={inputColor}
        onChange={(event) => {
          setColor(event.target.value);
          // setPickerInitialized(true);
          props.onColorChange?.(event.target.value);
        }}
        onClick={() => {
          if (color === "" && props.initialColorPickerColor) {
            setColor(props.initialColorPickerColor);
          }
        }}
      />
      {props.hintText && (
        <div className={styles.hintText}>{props.hintText}</div>
      )}
    </div>
  );
};
