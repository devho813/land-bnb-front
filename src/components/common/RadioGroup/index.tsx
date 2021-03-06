import React, { memo } from "react";
import { useSelector } from "../../../store";
import {
  radioDescription,
  radioGroupWarning,
  radioLabel,
  radioListWrapper,
} from "./styles";
import WarningIcon from "../../../../public/assets/warning.svg";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isValid?: boolean;
  errorMessage?: string;
  options?: { label: string; value: any; description?: string }[];
  value?: any;
  onChangeRadio?: (value: any) => () => void
}

function RadioGroup({
  label,
  isValid,
  errorMessage = "옵션을 선택하세요",
  options = [],
  value,
  onChangeRadio,
}: IProps) {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <div>
      <p css={radioLabel}>{label}</p>
      <div css={radioListWrapper}>
        {options.map((option) => (
          <label key={option.label}>
            <input
              type="radio"
              checked={value === option.value}
              onChange={onChangeRadio && onChangeRadio(option.value)}
            />
            <span>
              {option.label}
              {option.description && <span css={radioDescription}>{option.description}</span>}
            </span>
          </label>
        ))}
      </div>
      {validateMode && !isValid && (
        <div css={radioGroupWarning}>
          <WarningIcon />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default memo(RadioGroup);
