import { combineReducers } from "redux";
import { animalReducer } from "../slices";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  animalReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

//get the type of state that has rootReducer and typed useSelector
type RootState = ReturnType<typeof rootReducer>;

//get the type of state that has store (setupStore)
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppDispatch, AppStore };

export { setupStore };
