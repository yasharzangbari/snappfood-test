import styles from "./styles.module.scss";
import { FC } from "react";

type Props = {
  title: string;
};

const Button: FC<Props> = (props) => {
  return <button className={styles["button"]}>{props.title}</button>;
};

export default Button;
