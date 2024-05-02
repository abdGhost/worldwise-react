/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    //   weekday: "long",
  }).format(new Date(date));

export default function CityItems({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.cityEmoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
