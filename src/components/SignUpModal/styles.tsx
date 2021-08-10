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

  & > svg {
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

export const signUpModalBirthdaySelectors = css`
  display: flex;
  margin-bottom: 24px;
`;
export const signUpModalBirthdayMonthSelector = css`
  margin-right: 16px;
  flex-grow: 1;
`;
export const signUpModalBirthdayDaySelector = css`
  margin-right: 16px;
  width: 25%;
`;
export const signUpModalBirthdayYearSelector = css`
  width: 33.3333%;
`;

export const signUpModalSubmitButtonWrapper = css`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${palette.gray_eb};
`;

export const signUpModalSetLogin = css`
  color: ${palette.dark_cyan};
  margin-left: 8px;
  cursor: pointer;
`;
