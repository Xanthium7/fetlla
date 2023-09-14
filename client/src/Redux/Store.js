import { configureStore } from "@reduxjs/toolkit";
import Themeslice from "./Themeslics";

import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import Authslice from "./Authslice";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["Image"],
};
const rootreducer = {

  auth: Authslice.reducer,

};
const persistedreducer = persistCombineReducers(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedreducer,
});

export default store;
