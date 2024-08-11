import { useCallback, useEffect, useState } from "react";
import { ColorBar } from "../colorBar/ColorBar";
import styles from "./ColorsPicker.module.css";
import { IColorsPickerProps } from "./IColorsPickerProps";

/**
 * A component to pick a defined number of colors. Each consecutive color has its predecessor color as reference.
 */
export const ColorsPicker: React.FC<IColorsPickerProps> = (props) => {
  const initialBarColor = "";
  const getInitialColors = useCallback(
    (initialMainColor?: string, allInitialColors?: string[]) => {
      if (allInitialColors && allInitialColors.length !== 0) {
        return allInitialColors;
      } else {
        return [...Array(props.numberOfColorsToGenerate)].map((_, index) => {
          if (index === 0) {
            return initialMainColor ?? initialBarColor;
          } else {
            return initialBarColor;
          }
        });
      }
    },
    [props.numberOfColorsToGenerate]
  );

  useEffect(() => {
    setColors(getInitialColors(undefined, props.allInitialColors));
  }, [props.allInitialColors, getInitialColors]);

  const [colors, setColors] = useState<string[]>(
    getInitialColors(props.initialMainColor, props.allInitialColors)
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
      isProminent={props.positionOfMainColor === index}
      hintText={
        props.positionOfMainColor === index ? props.hintTextForMainColor : ""
      }
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
