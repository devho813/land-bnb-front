import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  padding: 62px 30px 100px;

  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }

  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }
`;

export const roomRegisterStepInfo = css`
  font-size: 14px;
  max-width: 400px;
  word-break: keep-all;
`;
