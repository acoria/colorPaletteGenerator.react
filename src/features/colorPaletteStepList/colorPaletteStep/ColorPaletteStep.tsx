import { IColorPaletteStepProps } from "./IColorPaletteStepProps";
import styles from "./colorPaletteStep.module.css";

export const ColorPaletteStep: React.FC<IColorPaletteStepProps> = (props) => {
  return (
    <div className={styles.colorPaletteStep}>
      {typeof props.title === "string" ? (
        <h4 className={styles.title}>{props.title}</h4>
      ) : (
        props.title
      )}
      <p className={styles.explanation}>{props.explanation}</p>
      {props.children}
    </div>
  );
};
