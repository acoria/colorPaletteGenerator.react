import { ReactNode, useContext } from "react";
import { ReactComponent as CircleWithFive } from "../../../assets/circleWithFive.svg";
import { ReactComponent as CircleWithFour } from "../../../assets/circleWithFour.svg";
import { ReactComponent as CircleWithOne } from "../../../assets/circleWithOne.svg";
import { ReactComponent as CircleWithThree } from "../../../assets/circleWithThree.svg";
import { ReactComponent as CircleWithTwo } from "../../../assets/circleWithTwo.svg";
import { ReactComponent as Decision } from "../../../assets/decision.svg";
import { AppContext } from "../../../context/AppContext";
import { CodeToColor } from "../../codeToColor/CodeToColor";
import { ColorPicker } from "../../colorPicker/ColorPicker";
import { ExampleWithButtons } from "../../designExamples/exampleWithButtons/ExampleWithButtons";
import { ColorPaletteStep } from "../colorPaletteStep/ColorPaletteStep";
import styles from "./ColorPaletteStepList.module.scss";

export const ColorPaletteStepList: React.FC = () => {
  const context = useContext(AppContext);
  const primaryColors = context.primaryColors.value;
  const neutralColors = context.neutralColors.value;
  const accentColor = context.accentColor.value;

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
              rel="noreferrer"
              className={styles.link}
            >
              Coolors.co
            </a>{" "}
            or take any other color palette and pick two colors you like from
            the same color palette.
          </>
        }
      >
        <div className={styles.centerElement}>
          <Decision className={styles.decisionIcon} />
        </div>
        <div className={styles.orSection}>
          <div className={styles.orText}>OR</div>
          <CodeToColor
            onNewColors={(colors) => {
              context.primaryColors.setValue([colors[0], colors[1], colors[2]]);
              if (colors.length === 7) {
                context.neutralColors.setValue([
                  colors[3],
                  "",
                  colors[4],
                  "",
                  colors[5],
                  "",
                  colors[6],
                ]);
              } else {
                context.neutralColors.setValue(
                  colors.filter((_, index) => index > 2)
                );
              }
            }}
          />
        </div>
      </ColorPaletteStep>
      <div className={styles.primaryAndAccentColor}>
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
            positionOfMainColor={1}
            onColorsChange={context.primaryColors.setValue}
            allInitialColors={primaryColors}
          />
        </ColorPaletteStep>
        <ColorPaletteStep
          title={colorTitle(
            <CircleWithThree className={styles.circleWithNumber} />,
            "Pick accent color"
          )}
          explanation="Decide which color should be your accent color. This color is only used 10% of the time to draw attention, e.g. for a call to action button."
        >
          <ColorPicker
            numberOfColorsToGenerate={1}
            onColorsChange={(colors) => context.accentColor.setValue(colors[0])}
            allInitialColors={accentColor ? [accentColor] : []}
          />
        </ColorPaletteStep>
      </div>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithFour className={styles.circleWithNumber} />,
          "Pick neutral colors"
        )}
        explanation="Pick the second color, then move a little up and left for each color
            until you nearly reach the top and left with the last color."
      >
        <ColorPicker
          numberOfColorsToGenerate={7}
          positionOfMainColor={2}
          onColorsChange={context.neutralColors.setValue}
          allInitialColors={neutralColors}
        />
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithFive className={styles.circleWithNumber} />,
          "Preview design"
        )}
        explanation="This is an example on how a design could look. In the next tab you can view more combinations and adjust individual elements' colors by clicking on them."
      >
        <div className={styles.centerElement}>
          <ExampleWithButtons
            backgroundColor={neutralColors[6]}
            titleColor={neutralColors[1]}
            buttonsSectionTextColor={neutralColors[0]}
            buttonsBackgroundColor={neutralColors[0]}
            buttonsTextColor={primaryColors[0]}
            buttonsBackgroundColorUnselected={neutralColors[3]}
            buttonsTextColorUnselected={neutralColors[0]}
            primaryButtonBackgroundColor={accentColor ?? "#FFFFFF"}
            primaryButtonTextColor={neutralColors[6]}
            headerBackgroundColor={primaryColors[0]}
            colors={[...primaryColors, ...neutralColors]}
            suppressExpanding
          />
        </div>
      </ColorPaletteStep>
    </div>
  );
};
