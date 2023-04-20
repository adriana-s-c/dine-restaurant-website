import styles from "./index.module.css";
import * as React from "react";
import enjoyablePlaceDesktop from "../../../../images/homepage/enjoyable-place-desktop.jpg";
import enjoyablePlaceTablet from "../../../../images/homepage/enjoyable-place-tablet.jpg";
import enjoyablePlaceMobile from "../../../../images/homepage/enjoyable-place-mobile.jpg";
import locallySourcedDesktop from "../../../../images/homepage/locally-sourced-desktop.jpg";
import locallySourcedTablet from "../../../../images/homepage/locally-sourced-tablet.jpg";
import locallySourcedMobile from "../../../../images/homepage/locally-sourced-mobile.jpg";
import divideIcon from "../../../../images/patterns/pattern-divide.svg";

type DescriptionBoxProps = {
  title: string;
  text: string;
};

export function DescriptionBox({ title, text }: DescriptionBoxProps) {
  return (
    <div
      className={
        title === "The most locally sourced food"
          ? styles.boxLocally
          : styles.box
      }
    >
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={
            title === "The most locally sourced food"
              ? locallySourcedMobile
              : enjoyablePlaceMobile
          }
          className={
            title === "The most locally sourced food0"
              ? styles.pictureLocally
              : styles.picture
          }
        />
        <source
          media="(max-width: 1120px)"
          srcSet={
            title === "The most locally sourced food"
              ? locallySourcedTablet
              : enjoyablePlaceTablet
          }
          className={
            title === "The most locally sourced food0"
              ? styles.pictureLocally
              : styles.picture
          }
        />
        <img
          src={
            title === "The most locally sourced food"
              ? locallySourcedDesktop
              : enjoyablePlaceDesktop
          }
          alt="Enjoyable Place"
          className={
            title === "The most locally sourced food"
              ? styles.pictureLocally
              : styles.picture
          }
        />
      </picture>
      <div
        className={
          title === "The most locally sourced food"
            ? styles.descriptionBoxLocally
            : styles.descriptionBox
        }
      >
        <img src={divideIcon} alt="Divide Icon" className={styles.divideIcon} />
        <header className={styles.header}>{title}</header>
        <p className={styles.content}>{text}</p>
      </div>
    </div>
  );
}
