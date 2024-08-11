import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Routes } from "../routes/Routes";
import styles from "./Page.module.scss";
import { Help } from "../features/help/Help";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { texts } from "../hooks/useTranslation/texts";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.home} onClick={() => navigate(Routes.HOME)}>
          <ColorPaletteIcon className={styles.colorPaletteIcon} />
          <h1 className={styles.titleOfApp}>{t(texts.appTitle)}</h1>
        </div>
        <Navbar
          className={styles.navbar}
          items={[
            { title: t(texts.pages.colors), route: Routes.HOME },
            {
              title: t(texts.pages.designExamples),
              route: Routes.DESIGN_EXAMPLES,
            },
            {
              title: t(texts.pages.paletteAndCode),
              route: Routes.PALETTE_AND_CODE,
            },
          ]}
        />
        <Help className={styles.helpIcon} />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
