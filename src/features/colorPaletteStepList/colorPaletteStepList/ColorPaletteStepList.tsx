import { ReactNode, useContext } from "react";
import { ReactComponent as CircleWithFive } from "../../../assets/circleWithFive.svg";
import { ReactComponent as CircleWithFour } from "../../../assets/circleWithFour.svg";
import { ReactComponent as CircleWithOne } from "../../../assets/circleWithOne.svg";
import { ReactComponent as CircleWithThree } from "../../../assets/circleWithThree.svg";
import { ReactComponent as CircleWithTwo } from "../../../assets/circleWithTwo.svg";
import { ReactComponent as Decision } from "../../../assets/decision.svg";
import { AppContext } from "../../../context/AppContext";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { CodeToColor } from "../../codeToColor/CodeToColor";
import { ColorsPicker } from "../../colorsPicker/ColorsPicker";
import { ExampleForWebsite } from "../../designExamples/exampleForWebsite/ExampleForWebsite";
import { ExampleWithButtons } from "../../designExamples/exampleWithButtons/ExampleWithButtons";
import { ColorPaletteStep } from "../colorPaletteStep/ColorPaletteStep";
import styles from "./ColorPaletteStepList.module.scss";

export const ColorPaletteStepList: React.FC = () => {
  const { t } = useTranslation();
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
          t(texts.steps.chooseTwoColors.title)
        )}
        explanation={
          <>
            {t(texts.steps.chooseTwoColors.explanation, {
              link: (
                <a
                  href="https://coolors.co/palettes"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Coolors.co
                </a>
              ),
            })}
          </>
        }
      >
        <div className={styles.chooseTwoColorsContent}>
          <Decision className={styles.decisionIcon} />
          <div className={styles.orText}>
            {t(texts.steps.chooseTwoColors.or)}
          </div>
          <h4 className={styles.title}>
            {t(texts.steps.chooseTwoColors.orTitle)}
          </h4>
          <CodeToColor
            onNewColors={(colors) => {
              context.primaryColors.setValue([
                colors[0],
                colors[1],
                colors[2],
                colors[3],
                colors[4],
              ]);
              context.accentColor.setValue(colors[5]);
              if (colors.length === 12) {
                context.neutralColors.setValue([
                  colors[6],
                  colors[7],
                  colors[8],
                  "",
                  colors[9],
                  "",
                  colors[10],
                  "",
                  colors[11],
                ]);
              } else {
                const emptyFieldsCount = 15 - colors.length;
                context.neutralColors.setValue([
                  ...colors.filter((_, index) => index > 5),
                  ...Array(emptyFieldsCount).map(() => ""),
                ]);
              }
            }}
          />
        </div>
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithTwo className={styles.circleWithNumber} />,
          t(texts.steps.pickPrimaryColor.title)
        )}
        explanation={t(texts.steps.pickPrimaryColor.explanation)}
      >
        <div className={styles.primaryAndAccentColorsPicker}>
          <ColorsPicker
            numberOfColorsToGenerate={5}
            positionOfLeadingColor={2}
            hintTextForLeadingColor={t(
              texts.steps.pickPrimaryColor.hintTextForColorBar
            )}
            onColorsChange={context.primaryColors.setValue}
            allInitialColors={primaryColors}
          />
          <div>
            <ColorPaletteStep
              title={colorTitle(
                <CircleWithThree className={styles.circleWithNumber} />,
                t(texts.steps.pickAccentColor.title)
              )}
              explanation={t(texts.steps.pickAccentColor.explanation)}
            >
              <ColorsPicker
                numberOfColorsToGenerate={1}
                onColorsChange={(colors) =>
                  context.accentColor.setValue(colors[0])
                }
                allInitialColors={[accentColor]}
              />
            </ColorPaletteStep>
          </div>
        </div>
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithFour className={styles.circleWithNumber} />,
          t(texts.steps.pickNeutralColors.title)
        )}
        explanation={t(texts.steps.pickNeutralColors.explanation)}
      >
        <ColorsPicker
          numberOfColorsToGenerate={9}
          positionOfLeadingColor={2}
          hintTextForLeadingColor={t(
            texts.steps.pickNeutralColors.hintTextForColorBar
          )}
          onColorsChange={context.neutralColors.setValue}
          allInitialColors={neutralColors}
        />
      </ColorPaletteStep>
      <ColorPaletteStep
        title={colorTitle(
          <CircleWithFive className={styles.circleWithNumber} />,
          t(texts.steps.previewDesign.title)
        )}
        explanation={t(texts.steps.previewDesign.explanation)}
      >
        <div className={styles.preview}>
          <div className={styles.previewContent}>
            <ExampleForWebsite
              backgroundColor="white"
              titleColor={neutralColors[2]}
              headerBackgroundColor={primaryColors[2]}
              cardColor={neutralColors[8]}
            />
            <ExampleWithButtons
              backgroundColor={neutralColors[8]}
              titleColor={neutralColors[1]}
              buttonsSectionTextColor={neutralColors[0]}
              buttonsBackgroundColor={neutralColors[0]}
              buttonsTextColor={primaryColors[2]}
              buttonsBackgroundColorUnselected={neutralColors[3]}
              buttonsTextColorUnselected={neutralColors[0]}
              primaryButtonBackgroundColor={accentColor}
              primaryButtonTextColor={neutralColors[8]}
              headerBackgroundColor={primaryColors[2]}
              colors={[...primaryColors, ...neutralColors]}
              suppressExpanding
            />
          </div>
        </div>
      </ColorPaletteStep>
    </div>
  );
};
