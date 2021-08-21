import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const signUpButton = css`
  height: 42px;
  margin-right: 8px;
  padding: 0 16px;
  border: 0;
  border-radius: 21px;
  background-color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${palette.gray_f7};
  }
`;

export const loginButton = css`
  height: 42px;
  padding: 0 16px;
  border: 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 21px;
  background-color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
`;
