import { css } from "@emotion/core";
import { theme } from "../Styles/theme";

export const logoStyles = css`
  position: absolute;
  top: ${theme.pm.pm300};
  left: 15vw;
  max-width: ${theme.sizes.logoMaxW};

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    left: ${theme.pm.pm100};
  }
`;

export const chevronStyles = css`
  width: ${theme.chevronW};
  height: ${theme.chevronW};
  transform: ${"rotate(-90deg)"};
  margin-right: ${theme.pm.pm300};
  cursor: pointer;
`;
