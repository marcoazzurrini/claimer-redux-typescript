import questionsReducer from "../Redux/Reducers/questions";
import QuizQuestions from "../Api/questions";
import * as types from "../Redux/actionTypes";

describe("questions reducer", () => {
  it("should return the initial state", () => {
    expect(questionsReducer(undefined, {})).toEqual({
      questions: QuizQuestions,
      currentQuestion: QuizQuestions[0],
      completedQuestions: [],
      answers: []
    });
  });

  it("should submit an answer", () => {
    expect(
      questionsReducer(undefined, {
        type: types.SUBMIT_ANSWER,
        input: "hello",
        id: "1",
        tag: "car"
      })
    ).toEqual({
      questions: QuizQuestions,
      currentQuestion: QuizQuestions[0],
      completedQuestions: [],
      answers: [{ answer: "hello", id: "1", tag: "car" }]
    });
  });

  it("should get next question", () => {
    expect(
      questionsReducer(undefined, {
        type: types.GET_NEXT_QUESTION,
        id: "1"
      })
    ).toEqual({
      questions: QuizQuestions,
      currentQuestion: QuizQuestions[0],
      completedQuestions: [],
      answers: []
    });
  });
});
