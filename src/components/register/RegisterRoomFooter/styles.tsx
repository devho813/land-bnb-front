import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 548px;
  height: 82px;
  padding: 14px 30px 20px;
  background-color: white;
  z-index: 10;
  border-top: 1px solid ${palette.gray_dd};
`;

export const registerRoomFooterBack = css`
  display: flex;
  align-items: center;
  color: ${palette.dark_cyan};
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;
