import { ReactNode } from "react";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import styles from "./Page.module.scss";
import { Navbar } from "../components/navbar/Navbar";
import { Route } from "../routes/Route";
import { useNavigate } from "react-router-dom";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.home} onClick={() => navigate(Route.HOME)}>
          <ColorPaletteIcon className={styles.colorPaletteIcon} />
          <h1 className={styles.titleOfApp}>Color Palette Generator</h1>
        </div>
        <Navbar
          items={[
            { title: "Colors", route: Route.HOME },
            { title: "Palette & Code", route: Route.PALETTE_AND_CODE },
          ]}
        />
      </div>
      <div className={styles.content}>{props.children}</div>
    </>
  );
};
