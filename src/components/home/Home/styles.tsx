import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  width: 100%;
  padding: 0 80px;

  h2 {
    width: 557px;
    margin: 80px 0 60px;
    font-size: 50px;
    color: ${palette.cardinal};
  }
`;

export const homeSearchBarLabel = css`
  margin: 32px 0 16px;
  font-weight: 600;
  font-size: 14px;
`;
