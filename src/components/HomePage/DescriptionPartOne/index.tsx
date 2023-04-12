import * as React from "react";
import styles from "./index.module.css";
import enjoyablePlaceDesktop from "../../../images/homepage/enjoyable-place-desktop.jpg";
import enjoyablePlaceTablet from "../../../images/homepage/enjoyable-place-tablet.jpg";
import enjoybalePlaceMobile from "../../../images/homepage/enjoyable-place-mobile.jpg";
import divideIcon from "../../../images/patterns/pattern-divide.svg";

export function DescriptionPartOne() {
  return (
    <div className={styles.box}>
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={enjoybalePlaceMobile}
          className={styles.picture}
        />
        <source
          media="(max-width: 1100px)"
          srcSet={enjoyablePlaceTablet}
          className={styles.picture}
        />
        <img
          src={enjoyablePlaceDesktop}
          alt="Enjoyable Place"
          className={styles.picture}
        />
      </picture>
      <div className={styles.descriptionBox}>
        <img src={divideIcon} alt="Divide Icon" className={styles.divideIcon} />
        <header className={styles.header}>
          Enjoyable place
          <br /> for all the family
        </header>
        <p className={styles.content}>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
    </div>
  );
}
