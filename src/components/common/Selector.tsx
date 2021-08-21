import { css } from "@emotion/react";
import React, { memo } from "react";
import { useSelector } from "../../store";
import palette from "../../styles/palette";

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  disabledOption: string;
  value: string | undefined;
  isValid: boolean | undefined;
}

function Selector({
  options = [],
  disabledOption,
  value,
  isValid,
  ...props
}: IProps) {
  const validateMode = useSelector((state) => state.common.validateMode);

  return (
    <div css={container}>
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
    </div>
  );
}

export default memo(Selector);

const container = css`
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

    &.validateMode {
      border-color: ${palette.tawny} !important;
      background-color: ${palette.snow};
    }

    &.validateMode.isValid {
      border-color: ${palette.dark_cyan} !important;
      background-color: white;
    }
  }
`;
