import { IExampleWithButtonProps } from "./IExampleWithButtonsProps";
import styles from "./ExampleWithButtons.module.css";
import { ColorPickOptions } from "../../colorPickOptions/ColorPickOptions";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const ExampleWithButtons: React.FC<IExampleWithButtonProps> = (
  props
) => {
  const [editMode, setEditMode] = useState(false);
  const [selectedEditColor, setSelectedEditColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [titleColor, setTitleColor] = useState(props.titleColor);
  const [buttonsSectionTextColor, setButtonsSectionTextColor] = useState(
    props.buttonsSectionTextColor
  );
  const [buttonsBackgroundColor, setButtonsBackgroundColor] = useState(
    props.buttonsBackgroundColor
  );
  const [buttonsTextColor, setButtonsTextColor] = useState(
    props.buttonsTextColor
  );
  const [
    buttonsBackgroundColorUnselected,
    setButtonsBackgroundColorUnselected,
  ] = useState(props.buttonsBackgroundColorUnselected);
  const [buttonsTextColorUnselected, setButtonsTextColorUnselected] = useState(
    props.buttonsTextColorUnselected
  );
  const [primaryButtonBackgroundColor, setPrimaryButtonBackgroundColor] =
    useState(props.primaryButtonBackgroundColor);
  const [primaryButtonTextColor, setPrimaryButtonTextColor] = useState(
    props.primaryButtonTextColor
  );
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(
    props.headerBackgroundColor
  );

  useEffect(() => {
    setBackgroundColor(props.backgroundColor);
    setTitleColor(props.titleColor);
    setButtonsSectionTextColor(props.buttonsSectionTextColor);
    setButtonsBackgroundColor(props.buttonsBackgroundColor);
    setButtonsTextColor(props.buttonsTextColor);
    setButtonsTextColorUnselected(props.buttonsTextColorUnselected);
    setButtonsBackgroundColorUnselected(props.buttonsBackgroundColorUnselected);
    setPrimaryButtonBackgroundColor(props.primaryButtonBackgroundColor);
    setPrimaryButtonTextColor(props.primaryButtonTextColor);
  }, [props]);

  const setSelectedColorToElement = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    colorChangeFunction: Dispatch<SetStateAction<any>>
  ) => {
    if (editMode) {
      colorChangeFunction(selectedEditColor);
      event.stopPropagation();
    }
  };

  const button = (
    caption: string,
    backgroundColor: string,
    setBackgroundColor: Dispatch<SetStateAction<any>>,
    color: string,
    setColor: Dispatch<SetStateAction<any>>
  ) => (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      onClick={(event) => setSelectedColorToElement(event, setBackgroundColor)}
    >
      <div
        className={styles.text}
        onClick={(event) => setSelectedColorToElement(event, setColor)}
      >
        {caption}
      </div>
    </div>
  );

  const selectedButton = (caption: string) =>
    button(
      caption,
      buttonsBackgroundColor,
      setButtonsBackgroundColor,
      buttonsTextColor,
      setButtonsTextColor
    );

  const unselectedButton = (caption: string) =>
    button(
      caption,
      buttonsBackgroundColorUnselected,
      setButtonsBackgroundColorUnselected,
      buttonsTextColorUnselected,
      setButtonsTextColorUnselected
    );

  return (
    <div className={styles.exampleWithButtons}>
      <div className={`${editMode && styles.appInEditMode}`}>
        {editMode && (
          <ColorPickOptions
            className={styles.colorDropdown}
            colors={props.colors}
            onColorChosen={setSelectedEditColor}
            onClose={() => setEditMode(false)}
          />
        )}
        <div
          className={styles.app}
          style={{ backgroundColor: backgroundColor }}
          onClick={(event) => {
            !editMode && setEditMode(true);
            setSelectedColorToElement(event, setBackgroundColor);
          }}
        >
          <div
            className={styles.header}
            style={{
              backgroundColor: headerBackgroundColor,
              color: titleColor,
            }}
            onClick={(event) =>
              setSelectedColorToElement(event, setHeaderBackgroundColor)
            }
          >
            <div
              className={styles.text}
              onClick={(event) =>
                setSelectedColorToElement(event, setTitleColor)
              }
            >
              Example App
            </div>
          </div>
          <div className={styles.buttonsSection}>
            <div
              className={styles.buttonsSectionTitle}
              style={{ color: buttonsSectionTextColor }}
              onClick={(event) =>
                setSelectedColorToElement(event, setButtonsSectionTextColor)
              }
            >
              Pick from some choices
            </div>
            <div className={styles.buttons}>
              {selectedButton("Something")}
              {selectedButton("you")}
              {unselectedButton("can")}
              {selectedButton("click on")}
              {unselectedButton("or")}
              {selectedButton("something else")}
              {unselectedButton("you cannot")}
              {selectedButton("click on")}
            </div>
          </div>
          <div
            className={styles.primaryButton}
            style={{
              backgroundColor: primaryButtonBackgroundColor,
              color: primaryButtonTextColor,
            }}
            onClick={(event) =>
              setSelectedColorToElement(event, setPrimaryButtonBackgroundColor)
            }
          >
            <div
              className={styles.text}
              onClick={(event) => {
                setSelectedColorToElement(event, setPrimaryButtonTextColor);
              }}
            >
              Click for action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
