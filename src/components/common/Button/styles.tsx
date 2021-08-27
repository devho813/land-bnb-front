import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  &.normal {
    width: 100%;
    height: 48px;
    padding: 0 15px;
    border: 0;
    border-radius: 4px;
    background-color: ${palette.bittersweet};
    color: white;
    font-size: 16px;
    font-weight: 800;
    outline: none;
    cursor: pointer;
  }

  &.register {
    width: 161px;
    height: 45px;
    border: 1px solid ${palette.gray_c4};
    background-color: white;
    border-radius: 4px;
    color: ${palette.gray_48};
    font-size: 18px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
  }

  border: 0;
  border-radius: 4px;
  background-color: ${palette.bittersweet};
  color: white;
  font-size: 16px;
  font-weight: 800;
  outline: none;
  cursor: pointer;

  &.dark_cyan {
    background-color: ${palette.dark_cyan};
    color: white;

    &.reverse {
      background-color: white;
      border: 2px solid ${palette.dark_cyan};
      color: ${palette.dark_cyan};
    }
  }

  &.white {
    background-color: white;
    color: ${palette.black};
    border: 1px solid ${palette.gray_c4};
  }

  &.bittersweet {
    background-color: ${palette.bittersweet};
    color: white;
  }

  svg {
    margin-right: 12px;
  }
`;
