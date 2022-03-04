import { FC } from "react";
import Search from "../search";
import Filters from "../filters";
import Restaurants from "../restaurants";
import styles from "./styles.module.scss";
type Props = {};
const MainComponent: FC<Props> = () => {
  return (
    <>
      <div className={styles["search__filter__section"]}>
        <Search />
        <Filters />
      </div>
      <Restaurants />
    </>
  );
};

export default MainComponent;
