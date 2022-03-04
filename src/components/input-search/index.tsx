import Input from "../input";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";
import i18next from "i18next";
type Props = {};

const InputSearch = (props: Props) => {
  return (
    <div className={styles["input__search"]}>
      <span className={styles["input__search__icon"]}>
        <FaSearch />
      </span>
      <Input
        placeholder={i18next.t("search")}
        className={styles["input__search__input"]}
      />
    </div>
  );
};

export default InputSearch;
