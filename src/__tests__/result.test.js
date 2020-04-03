import React from "react";
import Result from "../Components/Result";
import { shallow, mount } from "enzyme";

const mockAnswers = [
  { answer: "a", id: "a", tag: "a" },
  { answer: "b", id: "b", tag: "b" },
  { answer: "c", id: "c", tag: "c" },
  { answer: "d", id: "d", tag: "d" },
  { answer: "No", id: "e", tag: "e" }
];

describe("testing Result component", () => {
  it("should render without errors", () => {
    shallow(<Result answers={mockAnswers} />);
  });

  it("should display the correct heading based on props", () => {
    const wrapper = mount(<Result answers={mockAnswers} />);
    expect(wrapper.find("h1").text()).toContain("Well done, a");
  });
  it("should display correct text based on props", () => {
    const wrapper = mount(<Result answers={mockAnswers} />);
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toContain("Your favourite c is c and your favourite d is d");
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toContain("We will not write you atb");
  });
});
