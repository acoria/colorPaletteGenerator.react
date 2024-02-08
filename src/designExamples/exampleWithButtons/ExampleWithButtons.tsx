import { IExampleWithButtonProps } from "./IExampleWithButtonsProps";
import styles from "./ExampleWithButtons.module.css";

export const ExampleWithButtons: React.FC<IExampleWithButtonProps> = (
  props
) => {
  const button = (caption: string, backgroundColor: string, color: string) => (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {caption}
    </div>
  );

  return (
    <div
      className={styles.exampleWithButtons}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div
        className={styles.header}
        style={{
          backgroundColor: props.headerBackgroundColor,
          color: props.titleColor,
        }}
      >
        Example App
      </div>
      <div className={styles.buttonsSection}>
        <div
          className={styles.buttonsSectionTitle}
          style={{ color: props.buttonsSectionTextColor }}
        >
          Pick from some choices
        </div>
        <div className={styles.buttons}>
          {button(
            "Something",
            props.buttonsBackgroundColor,
            props.buttonsTextColor
          )}
          {button("you", props.buttonsBackgroundColor, props.buttonsTextColor)}
          {button(
            "can",
            props.buttonsBackgroundColorUnselected,
            props.buttonsTextColorUnselected
          )}
          {button(
            "click on",
            props.buttonsBackgroundColor,
            props.buttonsTextColor
          )}
          {button(
            "or",
            props.buttonsBackgroundColorUnselected,
            props.buttonsTextColorUnselected
          )}
          {button(
            "something else",
            props.buttonsBackgroundColor,
            props.buttonsTextColor
          )}
          {button(
            "you cannot",
            props.buttonsBackgroundColorUnselected,
            props.buttonsTextColorUnselected
          )}
          {button(
            "click on",
            props.buttonsBackgroundColor,
            props.buttonsTextColor
          )}
        </div>
      </div>
      <div
        className={styles.primaryButton}
        style={{
          backgroundColor: props.primaryButtonBackgroundColor,
          color: props.primaryButtonTextColor,
        }}
      >
        Click for action
      </div>
    </div>
  );
};
