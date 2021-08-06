import { css } from "@emotion/react";
import React from "react";
import useValidateMode from "../../hooks/useValidateMode";
import palette from "../../styles/palette";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: any;
  isValid: boolean;
  useValidation: boolean;
  errorMessage: string;
}

function Input({
  icon,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props
}: IProps) {
  const { validateMode } = useValidateMode();

  return (
    <div
      css={container}
      className={`${isValid ? "isValid" : ""} ${
        validateMode && useValidation ? "useValidation" : ""
      }`}
    >
      <input {...props} className={icon ? "iconExist" : ""} />
      <div css={inputIconWrapper}>{icon}</div>
      {useValidation && validateMode && !isValid && errorMessage && (
        <p css={inputErrorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;

const container = css`
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
const inputIconWrapper = css`
  position: absolute;
  top: 0;
  right: 11px;
  height: 46px;
  display: flex;
  align-items: center;
`;

const inputErrorMessage = css`
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${palette.tawny};
`;
