import { css } from "@emotion/core";

export const base = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif;
  }
  input,
  button,
  textarea {
    font-family: "Montserrat", sans-serif;
  }
  button {
    border: none;
    background: none;
  }
  p {
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Libre Baskerville", serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
