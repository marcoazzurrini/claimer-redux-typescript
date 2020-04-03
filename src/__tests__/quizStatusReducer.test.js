import answersReducer from "../Redux/Reducers/answers";
import * as types from "../Redux/actionTypes";

describe("questions reducer", () => {
  it("should return the initial state", () => {
    expect(answersReducer(undefined, {})).toEqual(true);
  });

  it("should toggle quiz status", () => {
    expect(
      answersReducer(true, {
        type: types.TOGGLE_QUIZ_STATUS
      })
    ).toEqual(false);
  });
});
