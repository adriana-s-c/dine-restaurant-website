import salmonPicture from "../../../../images/homepage/salmon-desktop-tablet.jpg";
import salmonPictureMobile from "../../../../images/homepage/salmon-mobile.jpg";
import beefPicture from "../../../../images/homepage/beef-desktop-tablet.jpg";
import beefPictureMobile from "../../../../images/homepage/beef-mobile.jpg";
import moussePicture from "../../../../images/homepage/chocolate-desktop-tablet.jpg";
import moussePictureMobile from "../../../../images/homepage/chocolate-mobile.jpg";
import styles from "./index.module.css";

const dishes = [
  {
    id: 0,
    dishName: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    image: salmonPicture,
    imageMobile: salmonPictureMobile,
    alt: "Seared Salmon Fillet",
  },
  {
    id: 1,
    dishName: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    image: beefPicture,
    imageMobile: beefPictureMobile,
    alt: "Rosemary Filet Mignon",
  },
  {
    id: 2,
    dishName: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    image: moussePicture,
    imageMobile: moussePictureMobile,
    alt: "Chocolate Mousse",
  },
];

export function MenuRender() {
  return (
    <div className={styles.menuBox}>
      {dishes.map((dish: any) => {
        return (
          <div key={dish.id}>
            <div className={styles.dishesBox}>
              <picture>
                <source
                  media="(max-width: 600px)"
                  srcSet={dish.imageMobile}
                  className={styles.dishPicture}
                />
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className={styles.dishPicture}
                />
              </picture>
              <span className={styles.brownLine} />
              <div className={styles.textBox}>
                <p className={styles.dishName}>{dish.dishName}</p>
                <p className={styles.dishDescription}>{dish.description}</p>
              </div>
            </div>
            {dishes[2] === dish ? null : <div className={styles.divider} />}
          </div>
        );
      })}
    </div>
  );
}
