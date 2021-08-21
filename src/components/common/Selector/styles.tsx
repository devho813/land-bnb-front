import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  &.normal {
    width: 100%;
    height: 46px;

    select {
      width: 100%;
      height: 100%;
      background-color: white;
      border: 1px solid ${palette.gray_eb};
      padding: 0 11px;
      border-radius: 4px;
      outline: none;
      -webkit-appearance: none;
      background-image: url("/assets/selector_down_arrow.svg");
      background-position: right 11px center;
      background-repeat: no-repeat;
      font-size: 16px;

      &:focus {
        border-color: ${palette.dark_cyan};
      }
    }
  }

  &.register {
    width: 100%;

    label {
      position: relative;
    }

    span {
      display: block;
      font-size: 16px;
      color: ${palette.gray_76};
      font-weight: 600;
      margin-bottom: 8px;
    }

    select {
      width: 100%;
      height: 56px;
      border-radius: 8px;
      border: 1px solid ${palette.gray_b0};
      padding: 0 14px 0 12px;
      appearance: none;
      outline: none;
      -webkit-appearance: none;
      background-image: url("/assets/register_selector_down_arrow.svg");
      background-position: right 14px center;
      background-repeat: no-repeat;
    }
  }

  select {
    &.validateMode {
      border-color: ${palette.tawny};
      background-color: ${palette.snow};
    }

    &.validateMode.isValid {
      border-color: ${palette.dark_cyan};
      background-color: white;
    }

    &:disabled {
      background-image: url("/assets/disabled_register_selector_down_arrow.svg");
      background-color: ${palette.gray_f7};
      border-color: ${palette.gray_e5};
      color: ${palette.gray_e5};
      cursor: not-allowed;
    }
  }
`;

export const selectorWarning = css`
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
