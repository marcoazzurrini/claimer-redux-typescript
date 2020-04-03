import { SerializedStyles } from "@emotion/core";

export interface answer {
  answer: string;
  id: string;
  tag: string;
}
export interface Iquestion {
  id: string;
  question: string;
  tag: string;
  answers: [answer, answer, answer, answer, answer];
  type: string;
}

export interface Ianswers {
  id: string;
  tag: string;
  answer: string;
}

export interface IresultProps {
  answers: [answer, answer, answer, answer, answer];
}

export interface IpropsApp {
  questions: [];
  dispatchSubmitAnswer: Function;
  dispatchAddCompletedQuestion: Function;
  dispatchGetNextQuestion: Function;
  dispatchGetPreviousQuestion: Function;
  dispatchToggleQuizStatus: Function;
  quizStatus: boolean;
  answers: [answer, answer, answer, answer, answer];
  currentQuestion: any;
  completedQuestions: [];
}

export interface IbuttonProps {
  type: "button" | "submit" | "reset" | undefined;
  style: SerializedStyles | undefined;
  render: any | null;
  onClick: () => void;
  children: string | undefined;
}

export interface IinputRadioProps {
  props: {
    inputVal: string;
    handleChange: Function;
    currentQuestion: Iquestion;
  };
}

export interface IinputProps {
  props: {
    inputVal: string;
    handleChange: Function;
    currentQuestion: Iquestion;
  };
}

export interface IformProps {
  handleFormSubmit: Function;
  render: any;
  currentQuestion: Iquestion;
}
