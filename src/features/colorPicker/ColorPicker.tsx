import { useState } from "react";
import { ColorBar } from "../colorBar/ColorBar";
import styles from "./ColorPicker.module.css";
import { IColorPickerProps } from "./IColorPickerProps";

/**
 * A component to pick a defined number of colors. Each consecutive color has its predecessor color as reference.
 */
export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const initialBarColor = "";
  const getInitialColors = (
    initialTopColor?: string,
    allInitialColors?: string[]
  ) => {
    if (allInitialColors && allInitialColors.length !== 0) {
      return allInitialColors;
    } else {
      return [...Array(props.numberOfColorsToGenerate)].map((_, index) => {
        if (index === 0) {
          return initialTopColor ?? initialBarColor;
        } else {
          return initialBarColor;
        }
      });
    }
  };

  const [colors, setColors] = useState<string[]>(
    getInitialColors(props.initialTopColor, props.allInitialColors)
  );

  const getColorOfPreviousBar = (currentIndex: number) => {
    if (currentIndex === 0) {
      return colors[0];
    } else {
      return colors[currentIndex - 1];
    }
  };

  const colorBars = colors.map((color, index) => (
    <ColorBar
      key={index}
      color={color}
      initialColorPickerColor={getColorOfPreviousBar(index)}
      onColorChange={(color) => {
        setColors((previous) => {
          let colors = [];
          if (index === 0) {
            colors = getInitialColors(color);
          } else {
            colors = [...previous];
            colors[index] = color;
          }
          props.onColorsChange?.(colors);
          return colors;
        });
      }}
    />
  ));

  return <div className={styles.colorBars}>{colorBars}</div>;
};
