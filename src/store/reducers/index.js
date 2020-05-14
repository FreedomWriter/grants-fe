import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import HomePageReducer from "./HomePageReducer";
import applicantReducer from "./applicantReducer";
import onboardingReducer from "./onboardingReducer";
import collegesReducer from "./collegesReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  homePage: HomePageReducer,
  profileInfo: applicantReducer,
  onboarding: onboardingReducer,
  collegeList: collegesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
