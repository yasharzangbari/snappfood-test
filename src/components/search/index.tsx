import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import InputSearch from "../input-search";

type Props = {};

const Search: FC<Props> = () => {
  const [visible, setVisible] = useState<boolean>(true);
  useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) {
      visible && setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <>
      {visible && (
        <section className={styles["search"]}>
          <InputSearch />
        </section>
      )}
    </>
  );
};

export default Search;
