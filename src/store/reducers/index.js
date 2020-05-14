import {
  combineReducers
} from "redux";
import {
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import HomePageReducer from "./HomePageReducer";
import applicantReducer from "./applicantReducer";
import writerProfileReducer from "./writerProfileReducer.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  homePage: HomePageReducer,
  profileInfo: applicantReducer,
  writerprofile: writerProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;