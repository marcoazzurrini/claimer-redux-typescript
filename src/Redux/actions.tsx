import {
  SUBMIT_ANSWER,
  GET_PREVIOUS_QUESTION,
  GET_NEXT_QUESTION,
  ADD_COMPLETED_QUESTION,
  TOGGLE_QUIZ_STATUS
} from "./actionTypes";

export const submitAnswer = (input: string, id: string, tag: string) => ({
  type: SUBMIT_ANSWER,
  input,
  id,
  tag
});

export const getPreviousQuestion = (id: string) => ({
  type: GET_PREVIOUS_QUESTION,
  id
});

export const getNextQuestion = (id: string) => ({
  type: GET_NEXT_QUESTION,
  id
});

export const addCompletedQuestion = (question: string) => ({
  type: ADD_COMPLETED_QUESTION,
  question
});

export const toggleQuizStatus = () => ({ type: TOGGLE_QUIZ_STATUS });
