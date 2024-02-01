import { combineReducers, configureStore } from "@reduxjs/toolkit";

import Level1Reducer from "./features/Level1/Leve1Slice";
import Level2Reducer from "./features/Level2/Leve2Slice";

const store = configureStore({
  reducer: {
    Level_1Slice: Level1Reducer,
    Level_2Slice: Level2Reducer
  },
});

export default store;
