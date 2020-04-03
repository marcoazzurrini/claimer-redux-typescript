/** @jsx jsx */
import { jsx } from "@emotion/core";
import { headingSecondary, headingPrimary } from "../Styles/text";
import { InputRadioList } from "../Styles/inputs";
import PropTypes from "prop-types";
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

export default function InputRadio({ props }: props) {
  const {
    handleChange,
    currentQuestion: { answers, question, type }
  } = props;
  return (
    <ul css={InputRadioList}>
      <p css={headingPrimary}>{question}</p>
      {answers.map(answer => (
        <li key={answer}>
          <input
            value={answer}
            onChange={e => handleChange(e.target.value)}
            type={type}
            required
            id={answer}
            name="option"
          />
          <label css={headingSecondary} htmlFor={answer}>
            {answer}
          </label>
        </li>
      ))}
    </ul>
  );
}

InputRadio.propTypes = {
  optionalObjectWithStrictShape: PropTypes.exact({
    inputVal: PropTypes.string,
    question: PropTypes.object,
    handleChange: PropTypes.func
  })
};
