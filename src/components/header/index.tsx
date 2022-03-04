import { FC } from "react";
import styles from "./styles.module.scss";
import { FaAngleRight, FaShoppingCart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import i18next from "i18next";

type Props = {};

const Header: FC<Props> = () => {
  return (
    <header className={styles["header"]}>
      <FaAngleRight />
      <div className={styles["header__address"]}>
        <AiFillCaretDown />
        <span>{i18next.t("select_address")}</span>
      </div>

      <FaShoppingCart />
    </header>
  );
};

export default Header;
