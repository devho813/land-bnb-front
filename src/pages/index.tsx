import { css } from "@emotion/react";
import React from "react";

function Home() {
  return <div css={container}></div>;
}

export default Home;

const container = css`
  font-size: 21px;
  color: gray;
`;
