// import libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import components
import loginReducer from "./loginReducer.js";
import profileReducer from "./profileReducer.js";
import onboardingReducer from "./onboardingReducer";
import favoritesReducer from "./favoritesReducer.js";
import grantsReducer from "./grantsReducer.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  profileInfo: profileReducer,
  onboarding: onboardingReducer,
  favorites: favoritesReducer,
  grants: grantsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
