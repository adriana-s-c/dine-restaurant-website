import * as React from "react";
import styles from "./index.module.css";
import plus from "../../../../images/icons/icon-plus.svg";
import minus from "../../../../images/icons/icon-minus.svg";

type CounterProps = {
  people: number;
  setPeople: any;
};

export function Counter({ people, setPeople }: CounterProps) {
  const error = people >= 15;

  return (
    <div className={styles.counterBoxWithErrorMessage}>
      <div className={error ? styles.counterBoxError : styles.counterBox}>
        <img
          src={minus}
          alt="minus"
          className={styles.minus}
          onClick={() => setPeople(people === 1 ? people : people - 1)}
        />
        <p className={error ? styles.peopleTextError : styles.peopleText}>
          {people} {people === 1 ? "person" : "people"}
        </p>
        <img
          src={plus}
          alt="plus"
          className={styles.plus}
          onClick={() => setPeople(people + 1)}
        />
      </div>
      {error ? (
        <div className={styles.errorMessage}>
          For biggger parties contact us - +00 44 123 4567
        </div>
      ) : null}
    </div>
  );
}
