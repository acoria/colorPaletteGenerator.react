import styles from "./CssCode.module.css";
import { ICssCodeProps } from "./ICssCodeProps";

export const CssCode: React.FC<ICssCodeProps> = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <div className={styles.code}>
        <button
          onClick={() => navigator.clipboard.writeText(props.code.join(""))}
        >
          Copy to clipboard
        </button>
        {props.code.map((codeSnippet) => (
          <div className={styles.codeSnippet}>{codeSnippet}</div>
        ))}
      </div>
    </div>
  );
};
