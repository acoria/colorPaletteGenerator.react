import { NavLink } from "react-router-dom";
import { INavbarProps } from "./INavbarProps";
import styles from "./Navbar.module.css";

export const Navbar: React.FC<INavbarProps> = (props) => {
  return (
    <div className={styles.navbar}>
      {props.items.map((item) => (
        <NavLink className={styles.navLink} to={item.route} id={item.route}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
