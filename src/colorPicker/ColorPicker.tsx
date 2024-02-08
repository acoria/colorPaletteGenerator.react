import { IColorPickerProps } from "./IColorPickerProps";
import styles from "./ColorPicker.module.css";
import { ColorGenerator } from "../ColorGenerator/ColorGenerator";

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  return (
    <div>
      {typeof props.title === "string" ? (
        <h4 className={styles.title}>{props.title}</h4>
      ) : (
        props.title
      )}
      <p className={styles.explanation}>{props.explanation}</p>
      <ColorGenerator
        numberOfColorsToGenerate={props.numberOfColorsToGenerate}
        onColorsChange={props.onColorsChange}
      />
    </div>
  );
};
