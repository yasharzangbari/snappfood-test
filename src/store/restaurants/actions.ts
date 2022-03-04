import {
  GET_RESTAURANTS,
  SET_RESTAURANTS,
  SetRestaurantsActionsType,
} from "./types";

export const getRestaurants = (payload: any) => ({
  type: GET_RESTAURANTS,
  payload: payload,
});

export const setRestaurants = (
  payload: SetRestaurantsActionsType["payload"]
): SetRestaurantsActionsType => ({
  type: SET_RESTAURANTS,
  payload: payload,
});
