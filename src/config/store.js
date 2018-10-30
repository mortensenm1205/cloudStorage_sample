import { createStore, applyMiddleware, compose } from "redux";
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import { imageData } from "../components/Display/reducers";
import { imageUploadData } from '../components/Upload/reducers';

const rReducer = combineReducers({
  imageData,
  imageUploadData
});

const persistConfig = {
  key: 'root',
  storage,
};

const store = createStore(
  persistReducer(persistConfig, rReducer),
  compose(applyMiddleware(thunk, logger))
);

const persistor = persistStore(store);
export {
  store,
  persistor
}