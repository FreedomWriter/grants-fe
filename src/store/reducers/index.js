import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import HomePageReducer from "./HomePageReducer";
import profileReducer from "./profileReducer";
import onboardingReducer from "./onboardingReducer";
import collegesReducer from "./collegesReducer";
import grantsPageReducer from "./GrantsPageReducer.js";
import favoritesReducer from "./favoritesReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  homePage: HomePageReducer,
  profileInfo: profileReducer,
  onboarding: onboardingReducer,
  collegeList: collegesReducer,
  grantsPage: grantsPageReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
