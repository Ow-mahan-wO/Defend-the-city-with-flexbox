import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 10,
  UserCode: null,
  isWinUser: false,
  KillTime: false,
  FinalShot: false,
  isTrueUserCode: false,
  CodeEditorValueValidation: false,
  OpenModalCodeEditor: false,
  OpenModalDscription: true,
  Description:
    "fighter , Our mission today is very simple, but pay attention because this is the beginning of the war . you should At this stage, you have to place the zombies in a line so that the shooter can kill them. You can do this with the (display:flex;) command and bring them to the middle of the box with (justify-content \t\t:center;). Be quick before it's too late!",
};
const Level3Reducer = createSlice({
  name: "Level_3Slice",
  initialState,
  reducers: {
    Open_CloseModal: (state, action) => {
      state.OpenModalDscription = action.payload;
      action.payload === false
        ? (state.OpenModalCodeEditor = true)
        : (state.OpenModalCodeEditor = false);
    },
    ValidateUserCode: (state, action) => {
      state.UserCode = action.payload;
      let Propertypattern = /display:/g;
      let ValuePattern = /flex;/g;
      let Propertypattern2 = /align-items:/g;
      let ValuePattern2 = /center;/g;
      if (
        Propertypattern.test(state.UserCode) &&
        ValuePattern.test(state.UserCode) &&
        Propertypattern2.test(state.UserCode) &&
        ValuePattern2.test(state.UserCode) == true
      ) {
        state.isTrueUserCode = true;
        state.KillTime = true;
      } else {
        state.newStyles = "block";
        state.KillTime = false;
      }
    },
    KillZombiesShot: (state, action) => {
      (state.FinalShot = action.payload), (state.isWinUser = action.payload);
    },
  },
});
export const { Open_CloseModal, ValidateUserCode, KillZombiesShot, isWinUser } =
  Level3Reducer.actions;
export default Level3Reducer.reducer;
