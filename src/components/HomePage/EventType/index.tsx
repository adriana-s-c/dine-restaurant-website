import styles from "./index.module.css";
import familyGathering from "../../../images/homepage/family-gathering-desktop.jpg";
import patternLines from "../../../images/patterns/pattern-lines.svg";

export function EventType() {
  return (
    <div className={styles.box}>
      <div className={styles.eventTypeBox}>
        <img
          src={familyGathering}
          alt="Family Gathering by the Table"
          className={styles.picture}
        />
        <div className={styles.contentBox}>
          <h2 className={styles.header}>Family Gathering</h2>
          <p className={styles.content}>
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </p>
          <button className={styles.button}>Book a table</button>
          <div className={styles.typeEventBox}>
            <div className={styles.brownLine} />
            <div className={styles.eventTypes}>
              <p className={styles.chosen}>Family Gathering</p>
              <p className={styles.notChosen}>Special Events</p>
              <p className={styles.notChosen}>Social Events</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </div>
  );
}
