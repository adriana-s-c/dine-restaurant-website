import styles from "./index.module.css";
import { eventTypeData } from "..";

type EventDescriptionProps = {
  eventType: string;
};

export function EventDescription({ eventType }: EventDescriptionProps) {
  return (
    <div className={styles.box}>
      <h2 className={styles.header}>{eventType}</h2>
      <p className={styles.content}>
        {eventTypeData.map((event) => {
          return event.type === eventType ? event.text : null;
        })}
      </p>
    </div>
  );
}
