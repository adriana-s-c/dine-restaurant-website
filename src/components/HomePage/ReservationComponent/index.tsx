import styles from "./index.module.css";

export function ReservationComponent() {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>Ready to make a reservation?</h2>
      <button className={styles.button}>Book a table</button>
    </div>
  );
}
