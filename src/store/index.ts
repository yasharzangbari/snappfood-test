import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { isDevMod } from "../libs/utils";

const reducers = {};

export type ReducersType = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};

let devToolsMiddleware;
if (isDevMod) {
  devToolsMiddleware = "";
}
const store = createStore(combineReducers(reducers), devToolsMiddleware);

export default store;
