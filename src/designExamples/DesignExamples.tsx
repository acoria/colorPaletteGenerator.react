import styles from "./DesignExamples.module.css";
import { IDesignExampleProps } from "./IDesignExamplesProps";
import { ExampleWithButtons } from "./exampleWithButtons/ExampleWithButtons";

export const DesignExamples: React.FC<IDesignExampleProps> = (props) => {
  return (
    <div className={props.className}>
      <h4>Design examples</h4>
      <div className={styles.designExamples}>
        <ExampleWithButtons
          backgroundColor={props.colors[2]}
          titleColor={props.colors[3]}
          buttonsSectionTextColor={props.colors[3]}
          buttonsBackgroundColor={props.colors[3]}
          buttonsTextColor={props.colors[6]}
          buttonsBackgroundColorUnselected={props.colors[6]}
          buttonsTextColorUnselected={props.colors[3]}
          primaryButtonBackgroundColor={props.colors[0]}
          primaryButtonTextColor={props.colors[3]}
          colors={props.colors}
        />
        <ExampleWithButtons
          backgroundColor={props.colors[2]}
          titleColor={props.colors[3]}
          buttonsSectionTextColor={props.colors[3]}
          buttonsBackgroundColor={props.colors[3]}
          buttonsTextColor={props.colors[6]}
          buttonsBackgroundColorUnselected={props.colors[6]}
          buttonsTextColorUnselected={props.colors[3]}
          primaryButtonBackgroundColor={props.colors[0]}
          primaryButtonTextColor={props.colors[6]}
          colors={props.colors}
        />
        <ExampleWithButtons
          backgroundColor={props.colors[2]}
          titleColor={props.colors[1]}
          buttonsSectionTextColor={props.colors[3]}
          buttonsBackgroundColor={props.colors[3]}
          buttonsTextColor={props.colors[6]}
          buttonsBackgroundColorUnselected={props.colors[6]}
          buttonsTextColorUnselected={props.colors[3]}
          primaryButtonBackgroundColor={props.colors[0]}
          primaryButtonTextColor={props.colors[3]}
          headerBackgroundColor={props.colors[3]}
          colors={props.colors}
        />
        <ExampleWithButtons
          backgroundColor={props.colors[6]}
          titleColor={props.colors[3]}
          buttonsSectionTextColor={props.colors[3]}
          buttonsBackgroundColor={props.colors[4]}
          buttonsTextColor={props.colors[6]}
          buttonsBackgroundColorUnselected={props.colors[2]}
          buttonsTextColorUnselected={props.colors[4]}
          primaryButtonBackgroundColor={props.colors[0]}
          primaryButtonTextColor={props.colors[3]}
          colors={props.colors}
        />
        <ExampleWithButtons
          backgroundColor={props.colors[6]}
          titleColor={props.colors[3]}
          buttonsSectionTextColor={props.colors[3]}
          buttonsBackgroundColor={props.colors[1]}
          buttonsTextColor={props.colors[3]}
          buttonsBackgroundColorUnselected={props.colors[2]}
          buttonsTextColorUnselected={props.colors[3]}
          primaryButtonBackgroundColor={props.colors[0]}
          primaryButtonTextColor={props.colors[3]}
          colors={props.colors}
        />
      </div>
    </div>
  );
};
