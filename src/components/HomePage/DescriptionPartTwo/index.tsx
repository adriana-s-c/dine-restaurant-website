import styles from "./index.module.css";
import divideIcon from "../../../images/patterns/pattern-divide.svg";
import locallySourcedDesktop from "../../../images/homepage/locally-sourced-desktop.jpg";
import locallySourcedtablet from "../../../images/homepage/locally-sourced-tablet.jpg";
import locallySourcedMobile from "../../../images/homepage/locally-sourced-mobile.jpg";
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
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={locallySourcedMobile}
          className={styles.picture}
        />
        <source
          media="(max-width: 1100px)"
          srcSet={locallySourcedtablet}
          className={styles.picture}
        />
        <img
          src={locallySourcedDesktop}
          alt="Preparing Dish"
          className={styles.picture}
        />
      </picture>
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </div>
  );
}
