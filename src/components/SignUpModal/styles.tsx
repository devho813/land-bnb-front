import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const SignUpModalContainer = css`
  width: 568px;
  padding: 32px;
  background-color: white;
  z-index: 11;
`;

export const modalCloseXIcon = css`
  cursor: pointer;
  display: block;
  margin: 0 0 40px auto;
`;

export const inputWrapper = css`
  position: relative;
  margin-bottom: 16px;
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: 0 44px 0 11px;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: ${palette.gray_76}
    }
  }

  svg {
    position: absolute;
    right: 11px;
    top: 16px;
  }
`;
