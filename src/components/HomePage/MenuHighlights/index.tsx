import styles from "./index.module.css";
import divideIcon from "../../../images/patterns/pattern-divide.svg";
import { MenuRender } from "./MenuRender";

export function MenuHighlights() {
  return (
    <div className={styles.box}>
      <div className={styles.boxContent}>
        <div className={styles.descriptionBox}>
          <img
            src={divideIcon}
            alt="Divide Icon"
            className={styles.divideIcon}
          />
          <header className={styles.header}>
            A few highlights from our menu
          </header>
          <p className={styles.content}>
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <MenuRender />
      </div>
    </div>
  );
}
