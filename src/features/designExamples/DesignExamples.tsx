import { useContext, useMemo } from "react";
import styles from "./DesignExamples.module.scss";
import { IDesignExampleProps } from "./IDesignExamplesProps";
import { ExampleWithButtons } from "./exampleWithButtons/ExampleWithButtons";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";
import { TransformOriginHorizontal } from "./exampleWithButtons/TransformOriginHorizontal";

/**
 * A component to wrap design examples with different color combinations for a color palette
 */
export const DesignExamples: React.FC<IDesignExampleProps> = (props) => {
  const context = useContext(AppContext);
  const selectedNeutralColors = useMemo(() => {
    return new LimitedNeutralColorsSelector().select(
      context.neutralColors.value
    );
  }, [context.neutralColors]);

  //add black and white as colors to pick from
  const colors = useMemo<string[]>(
    () => [
      ...context.primaryColors.value,
      ...selectedNeutralColors,
      "white",
      "black",
    ],
    [context.primaryColors, selectedNeutralColors]
  );

  return (
    <div className={props.className}>
      <div className={styles.designExamples}>
        <div className={styles.designExamplesRow}>
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[6]}
            buttonsBackgroundColorUnselected={colors[6]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[6]}
            buttonsBackgroundColorUnselected={colors[6]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[6]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[7]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[4]}
            buttonsSectionTextColor={colors[4]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[7]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[4]}
            buttonsSectionTextColor={colors[4]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[7]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[4]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
            transformOriginHorizontal={TransformOriginHorizontal.RIGHT}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[4]}
            buttonsSectionTextColor={colors[0]}
            buttonsBackgroundColor={colors[0]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[1]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[4]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
            transformOriginHorizontal={TransformOriginHorizontal.RIGHT}
          />
        </div>
        <div className={styles.designExamplesRow}>
        <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[1]}
            buttonsTextColorUnselected={colors[7]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}

          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[0]}
            buttonsBackgroundColor={colors[0]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[1]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[2]}
            titleColor={colors[1]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[6]}
            buttonsBackgroundColorUnselected={colors[6]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            headerBackgroundColor={colors[3]}
            colors={colors}
          />
        </div>
        <div className={styles.designExamplesRow}>
        <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[1]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[4]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[1]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[1]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[4]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[5]}
            buttonsTextColorUnselected={colors[7]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[4]}
            buttonsTextColor={colors[6]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[4]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[1]}
            buttonsTextColor={colors[3]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}
            transformOriginHorizontal={TransformOriginHorizontal.RIGHT}
          />
          <ExampleWithButtons
            backgroundColor={colors[6]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[5]}
            buttonsBackgroundColor={colors[5]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[7]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}
            transformOriginHorizontal={TransformOriginHorizontal.RIGHT}
          />
        </div>
        <div className={styles.designExamplesRow}>
          {/* white background */}
          <ExampleWithButtons
            backgroundColor={colors[7]}
            titleColor={colors[5]}
            buttonsSectionTextColor={colors[5]}
            buttonsBackgroundColor={colors[5]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[6]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[3]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[7]}
            titleColor={colors[3]}
            buttonsSectionTextColor={colors[3]}
            buttonsBackgroundColor={colors[3]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[6]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[0]}
            primaryButtonTextColor={colors[8]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[7]}
            titleColor={colors[0]}
            buttonsSectionTextColor={colors[0]}
            buttonsBackgroundColor={colors[0]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[3]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
          <ExampleWithButtons
            backgroundColor={colors[7]}
            titleColor={colors[8]}
            buttonsSectionTextColor={colors[8]}
            buttonsBackgroundColor={colors[0]}
            buttonsTextColor={colors[7]}
            buttonsBackgroundColorUnselected={colors[2]}
            buttonsTextColorUnselected={colors[8]}
            primaryButtonBackgroundColor={colors[3]}
            primaryButtonTextColor={colors[7]}
            colors={colors}
          />
        </div>
      </div>
    </div>
  );
};
