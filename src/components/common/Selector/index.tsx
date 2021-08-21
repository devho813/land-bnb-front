import React, { memo } from "react";
import { useSelector } from "../../../store";
import WarningIcon from "../../../../public/assets/warning.svg";
import { container, selectorWarning } from "./styles";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  disabledOption: string;
  value?: string;
  isValid?: boolean;
  label?: string;
  useValidation?: boolean;
  errorMessage?: string;
  type?: "register" | "normal";
}

function Selector({
  options = [],
  disabledOption,
  value,
  isValid,
  label,
  useValidation,
  errorMessage = "옵션을 선택하세요.",
  type = "normal",
  ...props
}: IProps) {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <div css={container} className={type}>
      <label>
        {label && <span>label</span>}
        <select
          value={value}
          className={`
          ${isValid ? "isValid" : ""}
          ${validateMode ? "validateMode" : ""}
        `}
          {...props}
        >
          <option value={disabledOption} disabled>
            {disabledOption}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {useValidation && validateMode && !isValid && (
        <div css={selectorWarning}>
          <WarningIcon />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default memo(Selector);
