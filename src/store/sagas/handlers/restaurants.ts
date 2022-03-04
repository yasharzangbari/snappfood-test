import { call, put } from "redux-saga/effects";
import { setRestaurants } from "../../restaurants/actions";
import { vendors } from "../../../constants/types";
import { AxiosResponse } from "axios";
import { restHandler } from "../../../libs/rest";
import { GET_VENDORS } from "../../../constants/webservices";

export function* handleGetVendorsList(params: any) {
  const requestGetVendorsList = () => {
    return restHandler(
      {
        url: GET_VENDORS,
        urlParams: { page: params.payload.page, page_size: "10" },
        method: "GET",
      },
      false
    );
  };

  try {
    // @ts-ignore
    const response: AxiosResponse<{ data: vendors }> = yield call(
      requestGetVendorsList
    );
    const { data } = response;
    yield put(setRestaurants(data.data.finalResult));
  } catch (error) {
    console.log(error);
  }
}
