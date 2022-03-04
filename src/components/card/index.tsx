import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";
type Props = {};

const Card = (props: Props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__image"]}>
        <img
          src="https://static.snapp-food.com/350x233/uploads/images/vendors/covers/5e01b8a4bcf22.jpg"
          alt="restaurant-image"
        />
      </div>
      <div className={styles["card__image__logo"]}>
        <img
          src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5e425b1b4cf0b.jpg"
          alt="restaurant-logo"
        />
      </div>

      <div className={styles["card__info"]}>
        <div className={styles["card__info__header"]}>
          <div className={styles["card__info__title"]}>
            <span>پیتزا شیلا پارک ملت </span>
            <small className={styles["card__info__badge"]}>تا10%</small>
          </div>
          <div className={styles["card__info__rate"]}>
            <span>(11111)</span>
            <span className={styles["card__rate__badge"]}>
              4.5 <FaStar />
            </span>
          </div>
        </div>
        <p className={styles["card__info__tags"]}>فست فود پیتزا ساندویج برگر</p>
        <p className={styles["card__info__price"]}>
          <span className={styles["card__info__price__title"]}>
            پیک فروشنده{" "}
          </span>
          <span>223234</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
