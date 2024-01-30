import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 10,
  UserCode: null,
  isWinUser: null,
  newStyles: "block",
  CodeEditorValueValidation: false,
  OpenModalCodeEditor: false,
  OpenModalDscription: true,
  Description:
    "Oh hi fighter . Our mission today is very simple, but pay attention because this is the beginning of the war . you should At this stage, you have to place the zombies in a line so that the shooter can kill them. You can do this with the (display:flex;) command. Be quick before it's too late!",
};
const Level1Reducer = createSlice({
  name: "Level_1Slice",
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
      let pattern = /display:\sflex;/g;
      pattern.test(state.UserCode) == true
        ? (state.newStyles = "flex")
        : (state.newStyles = "block");
      console.log(pattern.test(state.UserCode));
      console.log(state.UserCode);
    },
  },
});
export const { Open_CloseModal, ValidateUserCode } = Level1Reducer.actions;
export default Level1Reducer.reducer;
