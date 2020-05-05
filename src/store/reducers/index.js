import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import HomePageReducer from "./HomePageReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  homePage: HomePageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
