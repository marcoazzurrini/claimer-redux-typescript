/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../Styles/inputs";
import { headingPrimary } from "../Styles/text";

interface Iquestion {
  id: string;
  question: string;
  tag: string;
  answers: [];
  type: string;
}
interface props {
  props: {
    inputVal: string;
    handleChange: Function;
    currentQuestion: Iquestion;
  };
}

export default function Input({ props }: props) {
  const inputRef = React.createRef<HTMLInputElement>();
  useEffect(() => {
    const node = inputRef.current;
    if (node) node.focus();
  });

  const {
    inputVal,
    handleChange,
    currentQuestion: { question, id, type }
  } = props;

  return (
    <React.Fragment>
      <label css={headingPrimary} htmlFor={id}>
        {question}
      </label>
      <input
        css={TextInput}
        ref={inputRef}
        id={id}
        value={inputVal}
        type={type}
        onChange={e => handleChange(e.target.value)}
        required
      />
    </React.Fragment>
  );
}

Input.propTypes = {
  optionalObjectWithStrictShape: PropTypes.exact({
    inputVal: PropTypes.string,
    question: PropTypes.object,
    handleChange: PropTypes.func
  })
};
