import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";
import { finalResultItemType } from "../../constants/types";
import { commaSeparator } from "../../libs/utils";
type Props = {
  data: finalResultItemType;
};

const Card = (props: Props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__image"]}>
        <img src={props.data.backgroundImage} alt="restaurant-image" />
      </div>
      <div className={styles["card__image__logo"]}>
        <img src={props.data.logo} alt="restaurant-logo" />
      </div>

      <div className={styles["card__info"]}>
        <div className={styles["card__info__header"]}>
          <div className={styles["card__info__title"]}>
            <span>{props.data.title}</span>
            <small className={styles["card__info__badge"]}>
              {props.data.discountValueForView}%
            </small>
          </div>
          <div className={styles["card__info__rate"]}>
            <span>({props.data.countReview})</span>
            <span className={styles["card__rate__badge"]}>
              {props.data.rate} <FaStar />
            </span>
          </div>
        </div>
        <p className={styles["card__info__tags"]}>{props.data.description}</p>
        <p className={styles["card__info__price"]}>
          <span className={styles["card__info__price__title"]}>
            {props.data.vendorTypeTitle}
          </span>
          <span>{commaSeparator(props.data.deliveryFee)} ریال</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
