import styles from "./BuyMeACoffeeLink.module.scss";
import { ReactComponent as CoffeeToGoIcon } from "../../assets/coffee_to_go.svg";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { Link } from "../../components/link/Link";
import { IBuyMeACoffeeLinkProps } from "./IBuyMeACoffeeLinkProps";
import { AppConfig } from "../../AppConfig";
import { style } from "../../utils/style";

export const BuyMeACoffeeLink: React.FC<IBuyMeACoffeeLinkProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Link
      to={AppConfig.MY_PAYPAL_ME_LINK}
      className={style(styles.buyMeACoffeeLink, props.className)}
      openInNewTab
    >
      <CoffeeToGoIcon className={styles.icon} />
      <div className={styles.text}>
        <div>{t(texts.buyMeACoffee.youLikeIt)}</div>
        <div>{t(texts.buyMeACoffee.buyMeACoffee)}</div>
      </div>
    </Link>
  );
};
