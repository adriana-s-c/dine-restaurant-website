import styles from "./index.module.css";
import patternLines from "../../../images/patterns/pattern-lines.svg";

export function PageBody() {
  return (
    <div className={styles.box}>
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </div>
  );
}
