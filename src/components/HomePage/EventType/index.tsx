import * as React from "react";
import styles from "./index.module.css";
import familyGatheringPic from "../../../images/homepage/family-gathering-desktop.jpg";
import socialEventPic from "../../../images/homepage/social-events-desktop.jpg";
import specialEventPic from "../../../images/homepage/special-events-desktop.jpg";
import patternLines from "../../../images/patterns/pattern-lines.svg";

const eventTypeData = [
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

function pictureRender(eventType: string) {
  switch (eventType) {
    case "Special Events":
      return specialEventPic;
    case "Social Events":
      return socialEventPic;
    case "Family Gathering":
      return familyGatheringPic;
  }
}

function setBrownLine(eventType: string) {
  if (eventType === "Family Gathering") {
    return styles.brownLineFirst;
  }
  if (eventType === "Special Events") {
    return styles.brownLineSecond;
  }
  if (eventType === "Social Events") {
    return styles.brownLineThird;
  }
}

function imageAlt(eventType: string) {
  if (eventType === "Family Gathering") {
    return "Family Gathering by the Table";
  }
  if (eventType === "Special Events") {
    return "Group of People Celebrating by the Table";
  }
  if (eventType === "Social Events") {
    return "People Gathered on a Social Event by the Table";
  }
}

export function EventType() {
  const [eventType, setEventType] = React.useState("Family Gathering");

  return (
    <div className={styles.box}>
      <div className={styles.eventTypeBox}>
        <img
          src={pictureRender(eventType)}
          alt={imageAlt(eventType)}
          className={styles.picture}
        />
        <div className={styles.contentBox}>
          <h2 className={styles.header}>{eventType}</h2>
          <p className={styles.content}>
            {eventTypeData.map((event) => {
              return event.type === eventType ? event.text : null;
            })}
          </p>
          <button className={styles.button}>Book a table</button>
          <div className={styles.typeEventBox}>
            <div className={setBrownLine(eventType)} />
            <div className={styles.eventTypes}>
              {eventTypeData.map((event) => {
                return (
                  <p
                    key={event.id}
                    className={
                      eventType === event.type
                        ? styles.chosen
                        : styles.notChosen
                    }
                    role="button"
                    onMouseEnter={() => setEventType(event.type)}
                  >
                    {event.type}
                  </p>
                );
              })}
            </div>
          </div>
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
