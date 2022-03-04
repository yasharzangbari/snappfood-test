import { takeLatest } from "redux-saga/effects";
import { handleGetVendorsList } from "./handlers/restaurants";
import { GET_RESTAURANTS } from "../restaurants/types";
export function* watcherSaga() {
  yield takeLatest(GET_RESTAURANTS, handleGetVendorsList);
}
