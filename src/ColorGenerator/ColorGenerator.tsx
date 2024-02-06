import { useState } from "react";
import { ColorBar } from "../colorBar/ColorBar";
import styles from "./ColorGenerator.module.css";
import { IColorGeneratorProps } from "./IColorGeneratorProps";

export const ColorGenerator: React.FC<IColorGeneratorProps> = (props) => {
  const initialBarColor = "#eeeaea";
  const getInitialColors = (initialColor?: string) =>
    [...Array(props.numberOfColorsToGenerate)].map((_, index) => {
      if (index === 0) {
        return initialColor ?? initialBarColor;
      } else {
        return initialBarColor;
      }
    });

  const [colors, setColors] = useState<string[]>(
    getInitialColors(props.initialColor)
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

  return <div className={styles.colorGenerator}>{colorBars}</div>;
};
