import familyGatheringPic from "../../../../images/homepage/family-gathering-desktop.jpg";
import socialEventPic from "../../../../images/homepage/social-events-desktop.jpg";
import specialEventPic from "../../../../images/homepage/special-events-desktop.jpg";
import familyGatheringPicTablet from "../../../../images/homepage/family-gathering-tablet.jpg";
import socialEventPicTablet from "../../../../images/homepage/social-events-tablet.jpg";
import specialEventPicTablet from "../../../../images/homepage/special-events-tablet.jpg";
import familyGatheringPicMobile from "../../../../images/homepage/family-gathering-mobile.jpg";
import socialEventPicMobile from "../../../../images/homepage/social-events-mobile.jpg";
import specialEventPicMobile from "../../../../images/homepage/special-events-mobile.jpg";
import styles from "./index.module.css";

type PictureRenderProps = {
  eventType: string | any;
};

export function PictureRender({ eventType }: PictureRenderProps) {
  let description;
  let desktop;
  let tablet;
  let mobile;

  switch (eventType) {
    case "Special Events":
      desktop = specialEventPic;
      tablet = specialEventPicTablet;
      mobile = specialEventPicMobile;
      description = "Special Events";
      break;
    case "Social Events":
      desktop = socialEventPic;
      tablet = socialEventPicTablet;
      mobile = socialEventPicMobile;
      description = "Social Events";
      break;
    case "Family Gathering":
      desktop = familyGatheringPic;
      tablet = familyGatheringPicTablet;
      mobile = familyGatheringPicMobile;
      description = "Family Gathering";
  }
  return (
    <picture>
      <source
        media="(max-width: 600px)"
        srcSet={mobile}
        className={styles.picture}
      />
      <source
        media="(max-width: 1120px)"
        srcSet={tablet}
        className={styles.picture}
      />
      <img src={desktop} alt={description} className={styles.picture} />
    </picture>
  );
}
