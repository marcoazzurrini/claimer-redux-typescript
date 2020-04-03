/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TextInput } from "../Styles/inputs";
import { headingPrimary } from "../Styles/text";
import { IinputProps } from "../types";

export default function Input({ props }: IinputProps) {
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
