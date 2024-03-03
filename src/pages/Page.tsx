import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Routes } from "../routes/Routes";
import styles from "./Page.module.scss";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.home} onClick={() => navigate(Routes.HOME)}>
          <ColorPaletteIcon className={styles.colorPaletteIcon} />
          <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
        </div>
        <Navbar
          items={[
            { title: "Colors", route: Routes.HOME },
            { title: "Design examples", route: Routes.DESIGN_EXAMPLES },
            { title: "Palette & Code", route: Routes.PALETTE_AND_CODE },
          ]}
        />
      </div>
      <div className={styles.content}>{props.children}</div>
    </>
  );
};
