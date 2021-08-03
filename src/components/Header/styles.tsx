import { css } from "@emotion/react";

export const container = css`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
`;
export const logoWrapper = css`
  display: flex;
  align-items: center;
`;
export const logo = css`
  margin-right: 6px;
`;
