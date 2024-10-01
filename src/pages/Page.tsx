import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as ColorPaletteIcon } from "../assets/colorPalette.svg";
import { Navbar } from "../components/navbar/Navbar";
import { Help } from "../features/help/Help";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { Routes } from "../routes/Routes";
import styles from "./Page.module.scss";
import { Footer } from "../features/footer/Footer";

export const Page: React.FC<{ children?: ReactNode }> = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.home}>
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
      <Footer />
    </>
  );
};
