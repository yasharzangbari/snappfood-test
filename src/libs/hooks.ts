import { useEffect, useState } from "react";
import store from "../store";
import { getRestaurants } from "../store/restaurants/actions";

export const useLoadMore = () => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, []);

  useEffect(() => {
    // @ts-ignore
    store.dispatch(getRestaurants({ page }));
  }, [page]);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement?.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
};
