import { DescriptionBox } from "./DescriptionBox";
import styles from "./index.module.css";
import patternLines from "../../../images/patterns/pattern-lines.svg";

const enjoyablePlace = {
  title: "Enjoyable place for all the family",
  text: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal",
};

const locallySourced = {
  title: "The most locally sourced food",
  text: "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.",
};

export function Description() {
  return (
    <>
      <DescriptionBox title={enjoyablePlace.title} text={enjoyablePlace.text} />
      <DescriptionBox title={locallySourced.title} text={locallySourced.text} />
      <img
        src={patternLines}
        alt="Pattern of Lines"
        className={styles.patternLines}
      />
    </>
  );
}
