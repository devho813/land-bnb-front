import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const counterLabel = css`
  font-size: 16px;
  color: ${palette.gray_48};
  font-weight: 600;
`;

export const counterDescription = css`
  display: block;
  font-size: 14px;
  color: ${palette.gray_71};
`;

export const counterContents = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;

  button {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${palette.dark_cyan};
    color: ${palette.dark_cyan};
    background-color: white;
    outline: none;
    cursor: pointer;
    font-size: 21px;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;
