import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import palette from "./palette";

const globalStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    color: ${palette.black};
  }
`;

export default <Global styles={globalStyle} />;
