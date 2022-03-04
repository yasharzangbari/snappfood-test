import MainComponent from "../components/main";
import { useLoadMore } from "../libs/hooks";

export const Restaurants = () => {
  useLoadMore();
  return <MainComponent />;
};
