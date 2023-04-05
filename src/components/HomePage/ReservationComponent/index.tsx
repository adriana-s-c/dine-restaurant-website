import styles from "./index.module.css";
import { Link } from "react-router-dom";

export function ReservationComponent() {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Ready to make a reservation?</h2>
      <Link to="booktable">
        <button className={styles.button}>Book a table</button>
      </Link>
    </div>
  );
}
