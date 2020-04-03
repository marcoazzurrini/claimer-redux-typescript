/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { formStyles } from "../Styles/form";
import useFormValidation from "../Hooks/useFormValidation";
import PropTypes from "prop-types";
import Button from "./Button";
import { BtnMedium, messageStyles } from "../Styles/buttons";

interface Iquestion {
  id: string;
  question: string;
  tag: string;
  answers: [];
  type: string;
}
interface props {
  handleFormSubmit: Function;
  render: any;
  currentQuestion: Iquestion;
}

export default function Form({
  handleFormSubmit,
  render,
  currentQuestion
}: props) {
  const [inputVal, setInputVal] = useState<string>("");
  const [error, setError] = useState(false);

  const isValidated = useFormValidation(inputVal, currentQuestion.type);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidated && inputVal !== "") {
      handleFormSubmit(inputVal);
      setInputVal("");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  const handleChange = (inputValue: string) => setInputVal(inputValue);

  return (
    <form css={formStyles} onSubmit={handleSubmit}>
      {render({ inputVal, handleChange, currentQuestion })}
      {error ? (
        <Button style={messageStyles}>Please enter a valid input</Button>
      ) : null}
      <Button style={BtnMedium} type="submit">
        Submit
      </Button>
    </form>
  );
}

Form.propTypes = {
  render: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired
};
