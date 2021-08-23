import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const radioLabel = css`
  font-size: 16px;
  font-weight: 600;
  color: ${palette.gray_76};
  margin-bottom: 32px;
`;

export const radioListWrapper = css`
  &::after {
    content: "";
    display: block;
    clear: both;
  }

  label {
    float: left;
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.2;
    cursor: pointer;
    clear: both;

    &:last-of-type {
      margin-bottom: 0%;
    }
  }

  input[type="radio"] {
    width: 16px;
    height: 16px;
    margin: 0 12px 0 0;
    position: relative;
    flex-shrink: 0;
    font-size: 16px;
    -webkit-appearance: none;
    border: 1px solid ${palette.gray_b0};
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    .validateMode {
      border-color: ${palette.tawny};
      background-color: ${palette.snow};
    }

    .validateMode.isValid {
      border-color: ${palette.dark_cyan};
    }
  }

  input[type="radio"]:checked {
    background-color: ${palette.dark_cyan};
    border: 0;
  }

  input[type="radio"]:checked::after {
    content: "";
    width: 6px;
    height: 6px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    border-radius: 50%;
    display: block;
  }
`;

export const radioDescription = css`
  display: block;
  margin-top: 5px;
  margin-left: 28px;
`;

export const radioGroupWarning = css`
  margin-top: 8px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }

  p {
    font-size: 12px;
    color: ${palette.davidson_orange};
  }
`;
