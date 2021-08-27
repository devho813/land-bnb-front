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

export const registerRoomGeometryMapWrapper = css`
  width: 487px;
  height: 280px;
  margin-top: 24px;

  & > div {
    width: 100%;
    height: 100%;

    /* 지도 위성 제거 */
    .gmnoprint .gm-style.mtc {
      display: none;
    }
    /* 로드뷰 아이콘 제거 */
    .gm-svpc {
      display: none;
    }
    /* 풀스크린 제거 */
    .gm-fullscreen-control {
      display: none;
    }
  }
`;
