import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];
const composeEndhandcers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEndhandcers);
