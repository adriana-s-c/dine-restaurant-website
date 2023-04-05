import * as React from "react";
import styles from "./index.module.css";
import plus from "../../../../images/icons/icon-plus.svg";
import minus from "../../../../images/icons/icon-minus.svg";

export function Counter() {
  const [people, setPeople] = React.useState(2);

  return (
    <div className={styles.counterBox}>
      <img
        src={minus}
        alt="minus"
        className={styles.minus}
        onClick={() => setPeople(people === 1 ? people : people - 1)}
      />
      <p className={styles.peopleText}>
        {people} {people === 1 ? "person" : "people"}
      </p>
      <img
        src={plus}
        alt="plus"
        className={styles.plus}
        onClick={() => setPeople(people + 1)}
      />
    </div>
  );
}
