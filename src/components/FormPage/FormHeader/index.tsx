import styles from "./index.module.css";
import DineLogo from "../../../images/icons/dine.svg";

export function FormHeader() {
  return (
    <div className={styles.header}>
      <img src={DineLogo} alt="Dine Logo" className={styles.websiteName} />
      <div className={styles.textBox}>
        <h2 className={styles.textHeader}>Reservations</h2>
        <p className={styles.text}>
          We can’t wait to host you. If you have any special requirements please
          feel free to call on the phone number below. We’ll be happy to
          accommodate you.
        </p>
      </div>
    </div>
  );
}
