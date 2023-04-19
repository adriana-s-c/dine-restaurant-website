import { eventTypeData } from "..";
import styles from "./index.module.css";

type EventOptionsProps = {
  eventType: string;
  setEventType: any;
};

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
export function EventOptions({ eventType, setEventType }: EventOptionsProps) {
  return (
    <div className={styles.box}>
      <div className={setBrownLine(eventType)} />
      <div className={styles.eventTypesBox}>
        {eventTypeData.map((event) => {
          return (
            <p
              key={event.id}
              className={
                eventType === event.type
                  ? styles.activeHeadline
                  : styles.dimmedHeadline
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
  );
}
