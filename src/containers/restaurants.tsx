import MainComponent from "../components/main";
import { useEffect } from "react";
import { restHandler } from "../libs/rest";
import { GET_VENDORS } from "../constants/webservices";

export const Restaurants = () => {
  useEffect(() => {
    restHandler(
      {
        url: GET_VENDORS,
        urlParams: { page: "0", page_size: "10" },
        method: "GET",
      },
      false
    ).then((res) => {
      console.log(res);
    });
  }, []);
  return <MainComponent />;
};
