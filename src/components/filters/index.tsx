import styles from "./styles.module.scss";
import Button from "../button";
import i18next from "i18next";

type Props = {};

const Filters = (props: Props) => {
  return (
    <div className={styles["filters"]}>
      <Button title={i18next.t("filters")} />
    </div>
  );
};

export default Filters;
