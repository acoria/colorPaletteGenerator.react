import { ReactNode } from "react";
import { ColorPicker } from "../../colorPicker/ColorPicker";
import { ReactComponent as CircleWithOne } from "../../../assets/circleWithOne.svg";
import { ReactComponent as CircleWithThree } from "../../../assets/circleWithThree.svg";
import { ReactComponent as CircleWithTwo } from "../../../assets/circleWithTwo.svg";
import { ColorPaletteStep } from "../colorPaletteStep/ColorPaletteStep";
import styles from "./ColorPaletteStepList.module.css";
import { IColorPaletteStepListProps } from "./IColorPaletteStepListProps";

export const ColorPaletteStepList: React.FC<IColorPaletteStepListProps> = (
  props
) => {
  const colorTitle = (component: ReactNode, title: string) => (
    <div className={styles.colorTitle}>
      {component}
      <h4 className={styles.colorTitleText}>{title}</h4>
    </div>
  );

  return (
    <div className={styles.colorPaletteStepList}>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithOne className={styles.circleWithNumber} />,
          "Choose two colors"
        )}
        explanation={
          <>
            Go to{" "}
            <a href="https://coolors.co/palettes" target="_blank">
              Coolors.co
            </a>{" "}
            or take any other color palette and pick two colors you like from
            the same color palette.
          </>
        }
      />
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithTwo className={styles.circleWithNumber} />,
          "Pick primary colors"
        )}
        explanation="Decide which color should be your primary color. Click on the first
            element and use the picker to select this color. Then move left on the
            x-axis towards a lighter color for each following element."
      >
        <ColorPicker
          numberOfColorsToGenerate={3}
          onColorsChange={props.onSetPrimaryColors}
        />
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithThree className={styles.circleWithNumber} />,
          "Pick neutral colors"
        )}
        explanation="Pick the second color, then move a little up and left for each color
            until you reach the top and nearly the left with the last color."
      >
        <ColorPicker
          numberOfColorsToGenerate={7}
          onColorsChange={props.onSetNeutralColors}
        />
      </ColorPaletteStep>
    </div>
  );
};
