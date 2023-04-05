import * as React from "react";
import styles from "./index.module.css";
import { DataContext } from "../../../context";
import foodPic from "../../../images/homepage/locally-sourced-mobile.jpg";

export function ConfirmationBox() {
  const { data } = React.useContext(DataContext);
  console.log(data);

  return (
    <div className={styles.box}>
      <div className={styles.reservationBox}>
        <h2 className={styles.heading}>Your reservation has been confirmed!</h2>
        <p className={styles.textHeader}>Here's your reservation details:</p>
        <div className={styles.detailsBox}>
          <img src={foodPic} alt="Restaurant Dish" className={styles.image} />
          <div className={styles.detailsText}>
            <p className={styles.nameText}>{data.name}</p>
            <p className={styles.emailText}>{data.email}</p>
            <div className={styles.dataBox}>
              <p className={styles.dateText}>
                {data.month}/{data.day}/{data.year}
              </p>
              <p className={styles.timeText}>
                {data.hour}:{data.minutes}
              </p>
            </div>
            <p className={styles.tableText}>
              Table for: <br />
              {data.people}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
