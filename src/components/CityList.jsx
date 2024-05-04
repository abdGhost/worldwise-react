/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CityItems from "./CityItems";
import styles from "./CityList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CityContext";

export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your cities by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItems city={city} key={city.id} />
      ))}
    </ul>
  );
}
