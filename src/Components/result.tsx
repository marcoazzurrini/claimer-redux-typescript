/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { bodyLarge, headingPrimary } from "../Styles/text";
interface answer {
  answer: string;
  id: string;
  tag: string;
}
interface props {
  answers: [answer, answer, answer, answer, answer];
}

export default function Result({ answers }: props) {
  const { 0: name, 1: email, 2: favSport, 3: fav, 4: signup } = answers;
  return (
    <div>
      <h1 css={headingPrimary}>Well done, {name.answer}</h1>
      <p css={bodyLarge}>
        Your favourite {favSport.tag} is {favSport.answer} and your favourite{" "}
        {fav.tag} is {fav.answer}
      </p>
      <p css={bodyLarge}>
        {signup.answer === "No"
          ? "We will not write you at"
          : "We will write you at "}
        {email.answer}
      </p>
    </div>
  );
}

Result.propTypes = {
  answers: PropTypes.array.isRequired
};
