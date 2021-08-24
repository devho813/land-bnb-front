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

export const registerRoomBuildingSelectorWrapper = css`
  width: 320px;
  margin-bottom: 32px;
`;

export const registerRoomTypeRadio = css`
  max-width: 485px;
  margin-bottom: 50px;
`;

export const registerRoomIsSetupForGuestRadio = css`
  margin-bottom: 50px;
`;
