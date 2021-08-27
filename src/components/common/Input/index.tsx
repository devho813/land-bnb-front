import React, { memo } from "react";
import useValidateMode from "../../../hooks/useValidateMode";
import { container, inputErrorMessage, inputIconWrapper } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: Element;
  isValid?: boolean;
  useValidation?: boolean;
  errorMessage?: string;
  label?: string;
}

function Input({
  icon,
  isValid = false,
  useValidation = true,
  errorMessage,
  label,
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
      {label ? (
        <label>
          <span>{label}</span>
          <input {...props} className={icon ? "iconExist" : ""} />
        </label>
      ) : (
        <input {...props} className={icon ? "iconExist" : ""} />
      )}
      <div css={inputIconWrapper}>{icon}</div>
      {useValidation && validateMode && !isValid && errorMessage && (
        <p css={inputErrorMessage}>{errorMessage}</p>
      )}
    </div>
  );
}

export default memo(Input);
