import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { style } from "../../utils/style";
import { INavbarProps } from "./INavbarProps";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC<INavbarProps> = (props) => {
  const navigate = useNavigate();
  const [selectedItemRoute, setSelectedItemRoute] = useState<Routes>(
    Routes.HOME
  );

  return (
    <div className={styles.navbar}>
      {props.items.map((item) => (
        <div key={item.route}>
          <div
            className={style(
              styles.item,
              item.route === selectedItemRoute ? styles.selectedItem : ""
            )}
            onClick={() => {
              setSelectedItemRoute(item.route);
              if (item.route !== selectedItemRoute) {
                navigate(item.route);
              }
            }}
          >
            {item.title}
          </div>
          {item.route === selectedItemRoute && (
            <div className={styles.selectedItemBar}></div>
          )}
        </div>
      ))}
    </div>
  );
};
