import React from "react";
import Input from "../Components/Input";
import { shallow, mount } from "enzyme";
import QuizQuestions from "../Api/questions";
let { 0: currentQuestion } = QuizQuestions;
const props = {
  currentQuestion,
  inputVal: "",
  handleChange: () => null
};

describe("testing Input component", () => {
  it("should render without errors", () => {
    shallow(<Input props={props} />);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Input props={props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one Input", () => {
    const wrapper = mount(<Input props={props} />);
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("should render one label", () => {
    const wrapper = mount(<Input props={props} />);
    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("should change input value", () => {
    const mockHandleChange = jest.fn();
    const props = {
      currentQuestion,
      inputVal: "",
      handleChange: mockHandleChange
    };
    const wrapper = mount(<Input props={props} />);
    wrapper.find("input").simulate("change");
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("should display the question passed in props in the label", () => {
    currentQuestion.question = "mock";
    const wrapper = shallow(<Input props={props} />);
    expect(wrapper.text()).toContain("mock");
    wrapper.unmount();
  });
});
