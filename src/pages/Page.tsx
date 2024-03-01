import { ReactNode } from "react";
import styles from "./Page.module.css";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  return (
    <>
      <div className={styles.header}>
        <ColorPaletteIcon className={styles.colorPaletteIcon} />
        <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
      </div>
      {props.children}
    </>
  );
};
