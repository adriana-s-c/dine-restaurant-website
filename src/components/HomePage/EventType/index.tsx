import * as React from "react";
import styles from "./index.module.css";
import patternLines from "../../../images/patterns/pattern-lines.svg";
import { Link } from "react-router-dom";
import { PictureRender } from "./PictureRender";
import { EventOptions } from "./EventOptions";
import { EventDescription } from "./EventDescription";

export const eventTypeData = [
  {
    id: "1",
    type: "Family Gathering",
    text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  {
    id: "2",
    type: "Special Events",
    text: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
  },
  {
    id: "3",
    type: "Social Events",
    text: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
  },
];

export function EventType() {
  const [eventType, setEventType] = React.useState("Family Gathering");

  return (
    <div className={styles.box}>
      <div className={styles.eventTypeBox}>
        <PictureRender eventType={eventType} />
        <div className={styles.contentBox}>
          <EventDescription eventType={eventType} />
          <div className={styles.buttonBox}>
            <Link to="booktable">
              <button className={styles.button}>Book a table</button>
            </Link>
          </div>
          <EventOptions eventType={eventType} setEventType={setEventType} />
        </div>
      </div>
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </div>
  );
}
