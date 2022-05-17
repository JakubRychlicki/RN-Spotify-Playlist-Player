import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth";
import playlistReducer from "./reducers/playlist";

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
