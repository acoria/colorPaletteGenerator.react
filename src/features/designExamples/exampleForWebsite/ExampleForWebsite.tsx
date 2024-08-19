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
  const [cardColor1, setCardColor1] = useState(props.cardColor1);
  const [cardColor2, setCardColor2] = useState(props.cardColor2);
  const { t } = useTranslation();

  useEffect(() => {
    setBackgroundColor(props.backgroundColor);
    setTitleColor(props.titleColor);
    setHeaderBackgroundColor(props.headerBackgroundColor);
    setCardColor1(props.cardColor1);
    setCardColor2(props.cardColor2);
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
      <div className={styles.cards}>
        <div className={styles.card} style={{ backgroundColor: cardColor1 }}>
          Card
        </div>
        <div className={styles.card} style={{ backgroundColor: cardColor2 }}>
          Card
        </div>
      </div>
    </div>
  );
};
