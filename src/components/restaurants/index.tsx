import styles from "./styles.module.scss";
import i18next from "i18next";
import { FaSortAmountUp } from "react-icons/fa";
import Card from "../card";
type Props = {};

const Restaurants = (props: Props) => {
  return (
    <main className={styles["restaurants"]}>
      <section className={styles["restaurants__header"]}>
        <h2>345 فروشنده باز</h2>
        <span>
          <FaSortAmountUp /> {i18next.t("sort")}
        </span>
      </section>
      <section className={styles["restaurants__cards"]}>
        {[1, 2, 3].map((item) => (
          <div className={styles["restaurants__cards__item"]}>
            <Card />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Restaurants;
