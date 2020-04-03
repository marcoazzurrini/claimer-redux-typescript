import { combineReducers } from "redux";
import questionsReducer from "./questions";
import quizStatusReducer from "./quizStatus";
const rootReducer = combineReducers({
  questionsReducer,
  quizStatusReducer
});
export default rootReducer;
