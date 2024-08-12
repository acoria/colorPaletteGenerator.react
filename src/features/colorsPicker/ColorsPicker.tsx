import { useCallback, useEffect, useState } from "react";
import { ColorBar } from "../colorBar/ColorBar";
import styles from "./ColorsPicker.module.scss";
import { IColorsPickerProps } from "./IColorsPickerProps";
import { ReactComponent as Delete } from "../../assets/delete.svg";

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
          if (index === props.positionOfLeadingColor) {
            return initialMainColor ?? initialBarColor;
          } else {
            return initialBarColor;
          }
        });
      }
    },
    [props.numberOfColorsToGenerate, props.positionOfLeadingColor]
  );

  useEffect(() => {
    setColors(getInitialColors(undefined, props.allInitialColors));
  }, [props.allInitialColors, getInitialColors]);

  const [colors, setColors] = useState<string[]>(
    getInitialColors(props.initialMainColor, props.allInitialColors)
  );

  /**
   * Only set a color, if there is no color set yet. Otherwise open it with the color that is already set.
   * If the bar is above the leading column, take the value of the bar below.
   * If the bar is below the leading column or the leading column, take the value of the bar above.
   * If the bar is the leading column, open with the value from above.
   */
  const getColorOfAdjacentBar = (currentIndex: number) => {
    if (!props.positionOfLeadingColor) return;

    if (currentIndex < props.positionOfLeadingColor) {
      return colors[currentIndex + 1];
    } else {
      return colors[currentIndex - 1];
    }
  };

  const isLeadingBar = (index: number) =>
    props.positionOfLeadingColor === index;

  const colorBars = colors.map((color, index) => (
    <ColorBar
      key={index}
      color={color}
      isProminent={isLeadingBar(index)}
      hintText={isLeadingBar(index) ? props.hintTextForLeadingColor : ""}
      initialColorPickerColor={getColorOfAdjacentBar(index)}
      onColorChange={(color) => {
        setColors((previous) => {
          let colors = [];
          colors = [...previous];
          colors[index] = color;
          props.onColorsChange?.(colors);
          return colors;
        });
      }}
    />
  ));

  return (
    <div className={styles.colorsPicker}>
      <Delete
        className={styles.deleteIcon}
        onClick={() => {
          const colors = getInitialColors();
          setColors(colors);
          props.onColorsChange?.(colors);
        }}
      />
      <div className={styles.colorBars}>{colorBars}</div>
    </div>
  );
};
