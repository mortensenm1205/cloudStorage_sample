import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { imageData } from "../components/Upload/reducers";

const rReducer = combineReducers({
  imageData
});

export const store = createStore(
  rReducer,
  compose(applyMiddleware(thunk, logger))
);
