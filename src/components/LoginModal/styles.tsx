import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const container = css`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;
`;

export const modalCloseXIcon = css`
  cursor: pointer;
  display: block;
  margin: 0 0 40px auto;
`;

export const loginInputWrapper = css`
  position: relative;
  margin-bottom: 16px;
`;

export const loginPasswordInputWrapper = css`
  svg {
    cursor: pointer;
  }
`;

export const loginModalSubmitButtonWrapper = css`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${palette.gray_eb};
`;

export const loginModalSetSignUp = css`
  color: ${palette.dark_cyan};
  margin-left: 8px;
  cursor: pointer;
`;
