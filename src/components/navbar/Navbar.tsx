import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { style } from "../../utils/style";
import { INavbarProps } from "./INavbarProps";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC<INavbarProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItemRoute, setSelectedItemRoute] = useState<Routes>(
    location.pathname as Routes
  );

  return (
    <div className={style(styles.navbar, props.className)}>
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
