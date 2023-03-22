import salmonPicture from "../../../../images/homepage/salmon-desktop-tablet.jpg";
import beefPicture from "../../../../images/homepage/beef-desktop-tablet.jpg";
import moussePicture from "../../../../images/homepage/chocolate-desktop-tablet.jpg";
import styles from "./index.module.css";

const dishes = [
  {
    id: 0,
    dishName: "Seared Salmon Fillet",
    description:
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    image: salmonPicture,
    alt: "Seared Salmon Fillet",
  },
  {
    id: 1,
    dishName: "Rosemary Filet Mignon",
    description:
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    image: beefPicture,
    alt: "Rosemary Filet Mignon",
  },
  {
    id: 2,
    dishName: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    image: moussePicture,
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
              <img
                src={dish.image}
                alt={dish.alt}
                className={styles.dishPicture}
              />
              <span className={styles.brownLine} />
              <div>
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
