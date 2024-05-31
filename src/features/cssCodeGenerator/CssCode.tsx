import styles from "./CssCode.module.scss";
import { ICssCodeProps } from "./ICssCodeProps";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";

export const CssCode: React.FC<ICssCodeProps> = (props) => {
  return (
    <div>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.code}>
        <CopyIcon
          className={styles.copyIcon}
          onClick={() => {
            navigator.clipboard.writeText(props.code.join("\n"));
          }}
        />
        {props.code.map((codeSnippet) => (
          <div className={styles.codeSnippet}>{codeSnippet}</div>
        ))}
      </div>
    </div>
  );
};
