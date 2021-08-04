import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const SignUpModalContainer = css`
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

export const inputWrapper = css`
  position: relative;
  margin-bottom: 16px;

  svg {
    position: absolute;
    right: 11px;
    top: 16px;
  }
`;

export const passwordWrapper = css`
  svg {
    cursor: pointer;
  }
`;

export const signUpBirthdatLabel = css`
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const signUpModalBirthdayInfo = css`
  margin-bottom: 16px;
  color: ${palette.charcoal};
`;
