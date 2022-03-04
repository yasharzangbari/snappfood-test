import styles from "./styles.module.scss";
import { FC } from "react";
import i18next from "i18next";
import { FaHome } from "react-icons/fa";
import { Link, useMatch } from "react-router-dom";
import {
  ROUTE_ACCOUNT,
  ROUTE_ORDERS,
  ROUTE_RESTAURANTS,
} from "../../constants/routes";

type Props = {};

const Footer: FC<Props> = (props) => {
  const match = useMatch({ path: window.location.pathname, end: true });
  const links = [
    {
      id: 1,
      title: i18next.t("home"),
      link: ROUTE_RESTAURANTS,
      icon: <FaHome />,
    },
    {
      id: 2,
      title: i18next.t("orders"),
      link: ROUTE_ORDERS,
      icon: <FaHome />,
    },
    {
      id: 3,
      title: i18next.t("my_account"),
      link: ROUTE_ACCOUNT,
      icon: <FaHome />,
    },
  ] as const;
  return (
    <footer className={styles["footer"]}>
      {links.map((link) => (
        <Link
          to={link.link}
          className={`${styles["footer__items"]} ${
            match?.pathname === link.link && styles["footer__items--active"]
          }`}
        >
          {link.icon}
          <span>{link.title}</span>
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
