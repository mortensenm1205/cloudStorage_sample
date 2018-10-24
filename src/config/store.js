import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { imageData } from "../components/Display/reducers";
import { imageUploadData } from '../components/Upload/reducers';

const rReducer = combineReducers({
  imageData,
  imageUploadData
});

export const store = createStore(
  rReducer,
  compose(applyMiddleware(thunk, logger))
);
