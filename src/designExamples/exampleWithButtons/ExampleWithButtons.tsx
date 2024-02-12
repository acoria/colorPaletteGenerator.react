import { IExampleWithButtonProps } from "./IExampleWithButtonsProps";
import styles from "./ExampleWithButtons.module.css";
import { ColorPickOptions } from "../../colorPickOptions/ColorPickOptions";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { style } from "../../utils/style";

/**
 * A design example component with a header, buttons and some label text
 */
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

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    editMode && setEditMode(false);
  });

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
      if (selectedEditColor !== "") {
        colorChangeFunction(selectedEditColor);
      }
      //stop elements above from changing color by having their event triggered as well
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
    <div className={styles.exampleWithButtons} ref={ref}>
      <div className={`${editMode && styles.appWithEditMode}`}>
        {editMode && (
          <ColorPickOptions
            className={styles.colorDropdown}
            colors={props.colors}
            onColorChosen={setSelectedEditColor}
            onClose={() => setEditMode(false)}
          />
        )}
        <div
          className={style(
            styles.app,
            `${editMode && styles.editMode}`,
            `${backgroundColor === "white" && styles.appWithWhiteBackground}`
          )}
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
