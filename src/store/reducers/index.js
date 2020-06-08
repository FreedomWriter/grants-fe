// import libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import components
import loginReducer from "./loginReducer.js";
import HomePageReducer from "./HomePageReducer.js";
import profileReducer from "./profileReducer.js";
import onboardingReducer from "./onboardingReducer";
import collegesReducer from "./collegesReducer.js";
import grantsPageReducer from "./GrantsPageReducer.js";
import favoritesReducer from "./favoritesReducer.js";
import grantsReducer from "./grantsReducer.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  // homePage: HomePageReducer,
  profileInfo: profileReducer,
  onboarding: onboardingReducer,
  collegeList: collegesReducer,
  // grantsPage: grantsPageReducer,
  favorites: favoritesReducer,
  grants: grantsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
