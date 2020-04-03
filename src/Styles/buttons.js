import { css } from "@emotion/core";
import { theme } from "../Styles/theme";

export const BtnMedium = css`
  background: ${theme.colors.primary};
  padding: ${theme.pm.pm100} ${theme.pm.pm200};
  display: inline-block;
  border: none;
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.white};
  cursor: pointer;
  margin-bottom: ${theme.pm.pm200};
`;

export const messageStyles = css`
  padding: ${theme.pm.pm100} ${theme.pm.pm200};
  color: ${theme.colors.white};
  background: ${theme.colors.alert};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  margin-bottom: ${theme.pm.pm300};
`;
