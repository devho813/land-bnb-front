import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const headerUserProfile = css`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 6px 0 16px;
  border: 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 21px;
  background-color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }

  img {
    margin-left: 8px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const userMenu = css`
  position: absolute;
  right: 0;
  top: 52px;
  width: 240px;
  padding: 8px 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: white;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0 16px;
    cursor: pointer;
    &:hover {
      background-color: ${palette.gray_f7};
    }
  }
`;

export const userMenuDivider = css`
  width: 100%;
  height: 1px;
  margin: 8px 0;
  background-color: ${palette.gray_dd};
`;
