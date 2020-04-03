import { css } from "@emotion/core";
import { theme } from "../Styles/theme";

export const Layout = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: ${theme.sizes.formMaxW};
  padding-left: 15vw;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    padding-left: 0;
    padding: ${theme.pm.pm100};
  }
`;
