import React from "react";
import Form from "../Components/Form";
import { shallow, mount } from "enzyme";
import QuizQuestions from "../Api/questions";
const currentQuestion = QuizQuestions[0];

const MockElement = props => <input />;
describe("testing Form component", () => {
  it("should render without errors", () => {
    shallow(
      <Form
        currentQuestion={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
  });

  it("should match snapshot", () => {
    const wrapper = shallow(
      <Form
        currentQuestion={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one form", () => {
    const wrapper = mount(
      <Form
        currentQuestion={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("form")).toHaveLength(1);
  });

  it("should render one button", () => {
    const wrapper = mount(
      <Form
        currentQuestion={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should render one input if passed throgh the render prop", () => {
    const wrapper = mount(
      <Form
        currentQuestion={currentQuestion}
        handleSubmit={() => null}
        render={stuff => <MockElement stuff={stuff} />}
      />
    );
    expect(wrapper.find("input")).toHaveLength(1);
  });
});
