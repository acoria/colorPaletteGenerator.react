import { useContext, useMemo } from "react";
import styles from "./DesignExamples.module.scss";
import { IDesignExampleProps } from "./IDesignExamplesProps";
import { ExampleWithButtons } from "./exampleWithButtons/ExampleWithButtons";
import { AppContext } from "../../context/AppContext";
import { LimitedNeutralColorsSelector } from "../../services/LimitedNeutralColorsSelector";

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
          />
        </div>
      </div>
    </div>
  );
};
