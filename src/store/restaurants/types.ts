import { finalResult } from "../../constants/types";

export const GET_RESTAURANTS = "GET_RESTAURANTS";
export const SET_RESTAURANTS = "SET_RESTAURANTS";

export type RestaurantsType = {
  restaurants: finalResult;
};
export type SetRestaurantsActionsType = {
  type: typeof SET_RESTAURANTS;
  payload: finalResult;
};

export type UsersActionTypes = SetRestaurantsActionsType;
