import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Routes } from "../routes/Routes";
import styles from "./Page.module.scss";
import { Help } from "../features/help/Help";

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
          className={styles.navbar}
          items={[
            { title: "Colors", route: Routes.HOME },
            { title: "Design examples", route: Routes.DESIGN_EXAMPLES },
            { title: "Palette & Code", route: Routes.PALETTE_AND_CODE },
          ]}
        />
        <Help className={styles.helpIcon}/>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
