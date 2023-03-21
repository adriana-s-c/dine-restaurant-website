import styles from "./index.module.css";
import enjoyablePlace from "../../../images/homepage/enjoyable-place-desktop.jpg";
import divideIcon from "../../../images/patterns/pattern-divide.svg";

export function DescriptionPartOne() {
  return (
    <div className={styles.box}>
      <img
        src={enjoyablePlace}
        alt="Enjoyable Place"
        className={styles.picture}
      />
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
