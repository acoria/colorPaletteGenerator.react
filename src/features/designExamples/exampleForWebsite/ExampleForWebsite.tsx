import { IExampleForWebsiteProps } from "./IExampleForWebsiteProps";
import styles from "./ExampleForWebsite.module.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../hooks/useTranslation/texts";

export const ExampleForWebsite: React.FC<IExampleForWebsiteProps> = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [titleColor, setTitleColor] = useState(props.titleColor);
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState(
    props.headerBackgroundColor
  );
  const [cardColor, setCardColor] = useState(props.cardColor);
  const { t } = useTranslation();

  useEffect(() => {
    setBackgroundColor(props.backgroundColor);
    setTitleColor(props.titleColor);
    setHeaderBackgroundColor(props.headerBackgroundColor);
    setCardColor(props.cardColor);
  }, [props]);

  return (
    <div
      className={styles.exampleForWebsite}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={styles.title}
        style={{ backgroundColor: headerBackgroundColor, color: titleColor }}
      >
        {t(texts.exampleWebsite.appTitle)}
      </div>
      <div className={styles.card} style={{ backgroundColor: cardColor }}>
        Card
      </div>
    </div>
  );
};
