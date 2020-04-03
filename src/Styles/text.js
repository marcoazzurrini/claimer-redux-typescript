import { css } from "@emotion/core";
import { theme } from "./theme";
export const headingPrimary = css`
  font-size: ${theme.text.text700};
  color: ${theme.colors.grey300};
  margin-bottom: ${theme.pm.pm300};
  display: inline-block;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.text.text500};
  }
`;

export const headingSecondary = css`
  font-size: ${theme.text.text600};
  color: ${theme.colors.grey300};
  margin-bottom: ${theme.pm.pm200};
  display: inline-block;
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.text.text400};
  }
`;

export const bodyLarge = css`
  font-size: ${theme.text.text400};
  color: ${theme.colors.grey200};
  margin-bottom: ${theme.pm.pm200};
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.text.text200};
  }
`;
