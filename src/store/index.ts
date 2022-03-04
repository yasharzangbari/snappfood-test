import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import { restaurantsReducer } from "./restaurants/reducers";

const reducers = {
  restaurantsReducer,
};

export type ReducersType = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};

let devToolsMiddleware;
const sagaMiddleware = createSagaMiddleware();

devToolsMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(combineReducers(reducers), devToolsMiddleware);
sagaMiddleware.run(watcherSaga);
export default store;
