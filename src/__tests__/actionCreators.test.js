import * as types from "../Redux/actionTypes";
import * as actions from "../Redux/actions";

describe("actions", () => {
  it("should create an action to submit an answer", () => {
    const input = "hello";
    const id = "1";
    const tag = "Car";
    const expectedAction = { type: types.SUBMIT_ANSWER, input, id, tag };
    expect(actions.submitAnswer(input, id, tag)).toEqual(expectedAction);
  });
  it("should create an action to get next question", () => {
    const id = "1";
    const expectedAction = { type: types.GET_NEXT_QUESTION, id };
    expect(actions.getNextQuestion(id)).toEqual(expectedAction);
  });
  it("should create an action to get previous quiz instance", () => {
    const id = "1";
    const expectedAction = { type: types.GET_PREVIOUS_QUESTION, id };
    expect(actions.getPreviousQuestion(id)).toEqual(expectedAction);
  });
  it("should create an update quiz status", () => {
    const expectedAction = { type: types.TOGGLE_QUIZ_STATUS };
    expect(actions.toggleQuizStatus()).toEqual(expectedAction);
  });
});
