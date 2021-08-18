import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import palette from "./palette";

const globalStyle = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Noto Sans, Noto Sans KR, sans-serif;
    color: ${palette.black};
  }

  a {
    text-decoration: none;
    color: ${palette.black};
  }
`;

export default <Global styles={globalStyle} />;
