import * as React from "react";
import styles from "./index.module.css";
import { DataContext } from "../../../context";
import foodPic from "../../../images/homepage/locally-sourced-mobile.jpg";
import foodMobilePic from "../../../images/homepage/salmon-desktop-tablet.jpg";

function addZero(number: number) {
  if (number < 10) {
    return "0".concat(number.toString());
  } else return number;
}

function capitilizedName(name: string) {
  return name
    .split(" ")
    .map((word: string) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

export function ConfirmationBox() {
  const { data } = React.useContext(DataContext);

  const time = `${addZero(data.month)} / ${addZero(data.day)} / ${data.year}`;

  return (
    <div className={styles.box}>
      <div className={styles.reservationBox}>
        <h2 className={styles.heading}>Your reservation has been confirmed!</h2>
        <p className={styles.textHeader}>Here's your reservation details:</p>
        <div className={styles.detailsBox}>
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet={foodMobilePic}
              className={styles.image}
            />
            <img src={foodPic} alt="Restaurant Dish" className={styles.image} />
          </picture>
          <div className={styles.detailsText}>
            <p className={styles.nameText}>{capitilizedName(data.name)}</p>
            <p className={styles.emailText}>{data.email}</p>
            <div className={styles.dataBox}>
              <p className={styles.dateText}>{time}</p>
              <p className={styles.timeText}>
                {data.hour}:{data.minutes} {data.daytime}
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
