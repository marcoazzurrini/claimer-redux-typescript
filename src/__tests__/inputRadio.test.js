import React from "react";
import InputRadio from "../Components/InputRadio";
import { shallow, mount } from "enzyme";
import QuizQuestions from "../Api/questions";
let { 0: currentQuestion } = QuizQuestions;
let props = {
  currentQuestion,
  inputVal: "",
  handleChange: () => null
};

describe("testing InputRadio component", () => {
  it("should render without errors", () => {
    shallow(<InputRadio props={props} />);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<InputRadio props={props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one to many radio inputs", () => {
    const wrapper = shallow(<InputRadio props={props} />);
    expect(wrapper.find("input")).toBeTruthy();
  });

  it("should render one to many labels", () => {
    const wrapper = shallow(<InputRadio props={props} />);
    expect(wrapper.find("label")).toBeTruthy();
  });

  it("should render one paragraph", () => {
    const wrapper = shallow(<InputRadio props={props} />);
    expect(wrapper.find("paragraph")).toBeTruthy();
  });

  it("should display the question passed in props in the label", () => {
    currentQuestion.question = "mock";
    const wrapper = shallow(<InputRadio props={props} />);
    expect(wrapper.text()).toContain("mock");
    wrapper.unmount();
  });
});
