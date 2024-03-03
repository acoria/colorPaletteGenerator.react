import { ReactNode, useContext } from "react";
import { ReactComponent as CircleWithFour } from "../../../assets/circleWithFour.svg";
import { ReactComponent as CircleWithOne } from "../../../assets/circleWithOne.svg";
import { ReactComponent as CircleWithThree } from "../../../assets/circleWithThree.svg";
import { ReactComponent as CircleWithTwo } from "../../../assets/circleWithTwo.svg";
import { AppContext } from "../../../context/AppContext";
import { ColorPicker } from "../../colorPicker/ColorPicker";
import { ExampleWithButtons } from "../../designExamples/exampleWithButtons/ExampleWithButtons";
import { ColorPaletteStep } from "../colorPaletteStep/ColorPaletteStep";
import styles from "./ColorPaletteStepList.module.scss";

export const ColorPaletteStepList: React.FC = () => {
  const context = useContext(AppContext);
  const primaryColors = context.primaryColors.value;
  const neutralColors = context.neutralColors.value;

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
            <a
              href="https://coolors.co/palettes"
              target="_blank"
              className={styles.link}
            >
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
          onColorsChange={context.primaryColors.setValue}
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
          onColorsChange={context.neutralColors.setValue}
        />
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithFour className={styles.circleWithNumber} />,
          "Preview design"
        )}
        explanation="This is an example on how a design could look. In the next tab you view more combinations and adjust individual elements' colors by clicking on them."
      >
        <div className={styles.designExample}>
          <ExampleWithButtons
            backgroundColor={primaryColors[2]}
            titleColor={primaryColors[1]}
            buttonsSectionTextColor={neutralColors[0]}
            buttonsBackgroundColor={neutralColors[0]}
            buttonsTextColor={primaryColors[0]}
            buttonsBackgroundColorUnselected={neutralColors[3]}
            buttonsTextColorUnselected={neutralColors[0]}
            primaryButtonBackgroundColor={primaryColors[0]}
            primaryButtonTextColor={neutralColors[0]}
            headerBackgroundColor={neutralColors[0]}
            colors={[...primaryColors, ...neutralColors]}
          />
        </div>
      </ColorPaletteStep>
    </div>
  );
};
