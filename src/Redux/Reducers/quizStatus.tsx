import { TOGGLE_QUIZ_STATUS } from "../actionTypes";
import { Action } from "redux";

const initialState: boolean = true;

const quizStatusReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_QUIZ_STATUS:
      return !state;
    default:
      return state;
  }
};

export default quizStatusReducer;
