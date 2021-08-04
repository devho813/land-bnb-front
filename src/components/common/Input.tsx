import { css } from "@emotion/react";
import React from "react";
import palette from "../../styles/palette";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

function Input({ icon, ...props }: IProps) {
  return (
    <div css={container}>
      <input {...props} className={icon ? "iconExist" : ""} />
      <div css={inputIconWrapper}>{icon}</div>
    </div>
  );
}

export default Input;

const container = css`

  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: 0 11px;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &.iconExist{
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
