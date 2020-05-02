import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import collegesReducer from "./collegesReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  collegeList: collegesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
