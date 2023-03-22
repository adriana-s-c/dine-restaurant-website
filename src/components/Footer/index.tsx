import styles from "./index.module.css";
import dineLogo from "../../images/icons/dine.svg";

export function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.boxContent}>
        <img src={dineLogo} alt="Dine Logo" className={styles.logo} />
        <div className={styles.textBox}>
          <p>
            Marthwaite, Sedbergh <br />
            Cumbria
            <br /> +00 44 123 4567
          </p>
          <p className={styles.openingText}>
            OPEN TIMES
            <br /> MON - FRI: 09:00 AM - 10:00 PM
            <br /> SAT - SUN: 09:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}
