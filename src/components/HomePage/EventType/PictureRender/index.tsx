import familyGatheringPic from "../../../../images/homepage/family-gathering-desktop.jpg";
import socialEventPic from "../../../../images/homepage/social-events-desktop.jpg";
import specialEventPic from "../../../../images/homepage/special-events-desktop.jpg";
import familyGatheringPicTablet from "../../../../images/homepage/family-gathering-tablet.jpg";
import socialEventPicTablet from "../../../../images/homepage/social-events-tablet.jpg";
import specialEventPicTablet from "../../../../images/homepage/special-events-tablet.jpg";
import styles from "./index.module.css";

type PictureRenderProps = {
  eventType: string | any;
};

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

export function PictureRender({ eventType }: PictureRenderProps) {
  let description;
  let desktop;
  let tablet;

  //   let mobile;

  switch (eventType) {
    case "Special Events":
      desktop = specialEventPic;
      tablet = specialEventPicTablet;
      description = "Special Events";
      break;
    case "Social Events":
      desktop = socialEventPic;
      tablet = socialEventPicTablet;
      description = "Social Events";
      break;
    case "Family Gathering":
      desktop = familyGatheringPic;
      tablet = familyGatheringPicTablet;
      description = "Family Gathering";
  }
  return (
    <picture>
      <source
        media="(max-width: 1100px)"
        srcSet={tablet}
        className={styles.picture}
      />
      <img src={desktop} alt={description} className={styles.picture} />
    </picture>
  );
}
