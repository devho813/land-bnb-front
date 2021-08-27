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

export const registerRoomStepInfo = css`
  font-size: 14px;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const registerRoomLocationCountrySelectorWrapper = css`
  width: 385px;
  margin-bottom: 24px;
`;

export const registerRoomLocationCityDistrict = css``;
export const registerRoomLocationStreetAddress = css``;
export const registerRoomLocationDetailAddress = css``;
export const registerRoomLocationPostcode = css``;
