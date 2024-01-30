import { combineReducers, configureStore } from "@reduxjs/toolkit";

import Level1Reducer from "./components/Levels/Level1/Leve1Slice";

const store = configureStore({
  reducer: {
    Level_1Slice: Level1Reducer,
  },
});

export default store;
