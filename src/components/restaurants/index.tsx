import styles from "./styles.module.scss";
import i18next from "i18next";
import { FaSortAmountUp } from "react-icons/fa";
import Card from "../card";
import { useSelector } from "react-redux";
import { ReducersType } from "../../store";
import { finalResult } from "../../constants/types";
import { FC } from "react";
import { areEqual } from "../../libs/utils";
type Props = {};

const Restaurants: FC<Props> = (props) => {
  const restaurants = useSelector<ReducersType, finalResult | undefined>(
    (state) => state.restaurantsReducer.restaurants,
    areEqual
  );
  const data = restaurants?.filter((item) => item.type !== "TEXT");
  const countOfOpenSellers = restaurants?.find(
    (item) => item.type === "TEXT"
  )?.data;

  return (
    <main className={styles["restaurants"]}>
      <section className={styles["restaurants__header"]}>
        <h2> {countOfOpenSellers}</h2>
        <span>
          <FaSortAmountUp /> {i18next.t("sort")}
        </span>
      </section>
      <section className={styles["restaurants__cards"]}>
        {data?.map((restaurant) => (
          <div
            key={restaurant.data.id}
            className={styles["restaurants__cards__item"]}
          >
            <Card data={restaurant.data} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Restaurants;
