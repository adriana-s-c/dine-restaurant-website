import styles from "./index.module.css";
import EnjoyablePlace from "../../../images/homepage/enjoyable-place-desktop.jpg";

export function DescriptionPart() {
  return (
    <div className={styles.box}>
      <img
        src={EnjoyablePlace}
        alt="Enjoyable Place"
        className={styles.picture}
      />
      <span>Enjoyable place for all the family</span>
    </div>
  );
}
