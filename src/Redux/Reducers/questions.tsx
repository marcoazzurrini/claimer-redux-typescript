import {
  GET_NEXT_QUESTION,
  GET_PREVIOUS_QUESTION,
  ADD_COMPLETED_QUESTION,
  SUBMIT_ANSWER
} from "../actionTypes";

import QuizQuestions from "../../Api/questions";
interface Ianswers {
  id: string;
  tag: string;
  answer: string;
}

interface Iquestion {
  id: string;
  question: string;
  tag: string;
  answers: string[];
  type: string;
}

interface IinitialState {
  questions: Iquestion[];
  currentQuestion: Iquestion;
  completedQuestions: Iquestion[];
  answers: [];
}

interface Iaction {
  type: string;
  id: string;
  input: string;
  tag: string;
  question: object;
}

const initialState: IinitialState = {
  questions: QuizQuestions,
  currentQuestion: QuizQuestions[0],
  completedQuestions: [],
  answers: []
};

const questionsReducer = (state = initialState, action: Iaction) => {
  switch (action.type) {
    case GET_NEXT_QUESTION:
      const [nextQuestion] = state.questions.filter(
        (question: Iquestion) => question.id === action.id
      );
      return { ...state, currentQuestion: nextQuestion };

    case GET_PREVIOUS_QUESTION:
      const lastCompletedQuestion = [...state.completedQuestions].pop();
      const lastId = lastCompletedQuestion ? lastCompletedQuestion.id : "1";
      const prevAnswersInstance = state.answers.filter(
        (answer: Ianswers) => answer.id !== lastId
      );
      return {
        ...state,
        answers: prevAnswersInstance,
        completedQuestions: state.completedQuestions.filter(
          (question: Iquestion) => question.id !== lastId
        ),
        currentQuestion: lastCompletedQuestion
      };
    case ADD_COMPLETED_QUESTION:
      return {
        ...state,
        completedQuestions: [...state.completedQuestions, action.question]
      };
    case SUBMIT_ANSWER:
      return {
        ...state,
        answers: [
          ...state.answers,
          { answer: action.input, id: action.id, tag: action.tag }
        ]
      };

    default:
      return state;
  }
};
export default questionsReducer;
