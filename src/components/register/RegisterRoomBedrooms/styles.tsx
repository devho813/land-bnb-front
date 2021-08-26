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

export const registerRoomMaximumGuestCountWrapper = css`
  width: 320px;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const registerRoomBedroomCountWrapper = css`
  width: 320px;
  margin-bottom: 32px;
`;

export const registerRoomBedCountWrapper = css`
  width: 320px;
  margin-bottom: 57px;
`;

export const registerRoomBedTypeInfo = css`
  margin-top: 6px;
  margin-bottom: 20px;
  max-width: 400px;
  word-break: keep-all;
`;

export const registerRoomBedTypeListWrapper = css`
  width: 548px;
`;

export const registerRoomBedroom = css`
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid ${palette.gray_dd};

  &:last-of-type {
    border-bottom: 1px solid ${palette.gray_dd};
  }
`;

export const registerRoomBedTypeTop = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const registerRoomBedTypeBedroomText = css`
  margin-bottom: 28px;
`;

export const registerRoomBedTypeBedroom = css`
  font-size: 19px;
  color: ${palette.gray_48};
`;

export const registerRoomBedTypeBedroomCounts = css``;
