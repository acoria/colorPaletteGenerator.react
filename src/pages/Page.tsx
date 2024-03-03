import { ReactNode } from "react";
import styles from "./Page.module.css";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Routes } from "../routes/Routes";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.homeIcon}>
          <ColorPaletteIcon className={styles.colorPaletteIcon} />
          <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
        </div>
        <Navbar
          items={[
            { title: "Color pick", route: Routes.HOME },
            { title: "Palette & Code", route: Routes.PALETTE_AND_CODE },
          ]}
        />
      </div>
      {props.children}
    </>
  );
};
