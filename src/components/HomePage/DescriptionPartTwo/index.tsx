import styles from "./index.module.css";
import divideIcon from "../../../images/patterns/pattern-divide.svg";
import locallySourced from "../../../images/homepage/locally-sourced-desktop.jpg";
import patternLines from "../../../images/patterns/pattern-lines.svg";

export function DescriptionPartTwo() {
  return (
    <div className={styles.box}>
      <div className={styles.descriptionBox}>
        <img src={divideIcon} alt="Divide Icon" className={styles.divideIcon} />
        <header className={styles.header}>
          The most locally <br />
          sourced food
        </header>
        <p className={styles.content}>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
      <img
        src={locallySourced}
        alt="Preparing Dish"
        className={styles.picture}
      />
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </div>
  );
}
