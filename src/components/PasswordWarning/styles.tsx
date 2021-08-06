import { css } from "@emotion/react";
import palette from "../../styles/palette";

export const container = css`
  color: ${palette.davidson_orange};
  display: flex;
  align-items: center;
  margin-top: 8px;

  &.isValid {
    color: ${palette.green};
  }

  svg {
    margin-right: 8px;
  }
`;
