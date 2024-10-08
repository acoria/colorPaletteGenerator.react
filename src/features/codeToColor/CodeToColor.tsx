import { useRef } from "react";
import { HexColorsParser } from "../../services/HexColorsParser";
import styles from "./CodeToColor.module.scss";
import { ICodeToColorProps } from "./ICodeToColorProps";
import { ReactComponent as CopyRight } from "../../assets/copyRight.svg";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";

export const CodeToColor: React.FC<ICodeToColorProps> = (props) => {
  const hexColorsCode = useRef<HTMLTextAreaElement>(null);
  const {t} = useTranslation()

  return (
    <>
      <p className={styles.explanation}>
        {t(texts.codeToColor.explanation)}
      </p>
      <div className={styles.codeAndButton}>
        <CopyRight
          className={styles.copyButton}
          onClick={() => {
            const colors = new HexColorsParser().parse(
              hexColorsCode.current?.value ?? ""
            );
            props.onNewColors(colors);
          }}
        />
        <textarea
          className={styles.code}
          ref={hexColorsCode}
          placeholder='e.g. &#10;$color-primary: #09233e;&#10;or&#10;#f77e80&#10;or&#10;useValue(["#DB8529", "#E4A562"])'
        />
      </div>
    </>
  );
};
