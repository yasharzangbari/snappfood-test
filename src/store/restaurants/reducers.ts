import { RestaurantsType, SET_RESTAURANTS, UsersActionTypes } from "./types";

const initialState: RestaurantsType = {
  restaurants: [],
};

export const restaurantsReducer = (
  state = initialState,
  action: UsersActionTypes
): RestaurantsType => {
  switch (action.type) {
    case SET_RESTAURANTS: {
      return {
        ...state,
        restaurants: [...state.restaurants, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
