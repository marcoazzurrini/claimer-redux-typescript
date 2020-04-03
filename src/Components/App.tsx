/** @jsx jsx */
import React from "react";
import { Global, jsx } from "@emotion/core";
import { base } from "../Styles/base";
import { Layout } from "../Styles/Layout";
import Form from "./Form";
import Input from "./Input";
import InputRadio from "./InputRadio";
import Result from "./result";
import Button from "./Button";
import { connect } from "react-redux";
import { chevronStyles } from "../Styles/images";
import ChevronImage from "../Assets/chevron.png";
import { IpropsApp } from "../types";
import {
  submitAnswer,
  getNextQuestion,
  getPreviousQuestion,
  addCompletedQuestion,
  toggleQuizStatus
} from "../Redux/actions";
import getNextId from "../Utils/getNextQuestion";
import ErrorBoundary from "./ErrorBoundary";

function App({
  questions,
  dispatchSubmitAnswer,
  dispatchGetNextQuestion,
  dispatchGetPreviousQuestion,
  dispatchAddCompletedQuestion,
  answers,
  currentQuestion,
  completedQuestions,
  dispatchToggleQuizStatus,
  quizStatus
}: IpropsApp) {
  const handleSubmit = (inputValue: string) => {
    dispatchSubmitAnswer(inputValue, currentQuestion.id, currentQuestion.tag);
    dispatchAddCompletedQuestion(currentQuestion);
    const nextQuestionId = getNextId(questions, currentQuestion.id, inputValue);

    if (nextQuestionId) {
      dispatchGetNextQuestion(nextQuestionId);
    } else dispatchToggleQuizStatus();
  };

  const setPreviosQuizInstance = () => {
    if (completedQuestions.length > 0) {
      dispatchGetPreviousQuestion(currentQuestion.id);
    }
  };
  return (
    <div css={Layout}>
      <Global styles={base} />
      <ErrorBoundary>
        {quizStatus ? (
          <React.Fragment>
            <Form
              currentQuestion={currentQuestion}
              handleFormSubmit={handleSubmit}
              render={props => {
                if (currentQuestion.answers.length > 0)
                  return <InputRadio props={props} />;
                else return <Input props={props} />;
              }}
            />
            <Button
              style={chevronStyles}
              render={<img src={ChevronImage} alt="previous question" />}
              onClick={setPreviosQuizInstance}
            >
              Previous question
            </Button>
          </React.Fragment>
        ) : (
          <Result answers={answers} />
        )}
      </ErrorBoundary>
    </div>
  );
}

// export default App;
const mapStateToProps = (state: any) => ({
  questions: state.questionsReducer.questions,
  answers: state.questionsReducer.answers,
  currentQuestion: state.questionsReducer.currentQuestion,
  completedQuestions: state.questionsReducer.completedQuestions,
  quizStatus: state.quizStatusReducer
});
// MAP STATE TO PROPS
const mapDispatchToProps = (dispatch: Function) => ({
  dispatchSubmitAnswer: (inputValue: string, id: string, tag: string) =>
    dispatch(submitAnswer(inputValue, id, tag)),
  dispatchGetNextQuestion: (id: string) => dispatch(getNextQuestion(id)),
  dispatchGetPreviousQuestion: (id: string) =>
    dispatch(getPreviousQuestion(id)),
  dispatchAddCompletedQuestion: (id: string) =>
    dispatch(addCompletedQuestion(id)),
  dispatchToggleQuizStatus: () => dispatch(toggleQuizStatus())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
