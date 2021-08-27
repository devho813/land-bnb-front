import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  &.useValidation {
    /* 밸리데이션 에러 */
    input {
      background-color: ${palette.snow};
      border-color: ${palette.orange};

      &:focus {
        border-color: ${palette.orange};
      }
    }
  }

  &.useValidation.isValid {
    /* 밸리데이션 통과 */
    input {
      border-color: ${palette.dark_cyan};
    }
  }

  label {
    span {
      display: block;
      margin-bottom: 8px;
    }
  }

  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: 0 11px;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &.iconExist {
      padding: 0 44px 0 11px;
    }

    &::placeholder {
      color: ${palette.gray_76};
    }
    &:focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }
`;
export const inputIconWrapper = css`
  position: absolute;
  top: 0;
  right: 11px;
  height: 46px;
  display: flex;
  align-items: center;
`;

export const inputErrorMessage = css`
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${palette.tawny};
`;
