import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
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

export const registerRoomBedTypeSelectorWrapper = css`
  width: 320px;
`;

export const registerRoomBedTypeBedroomCounts = css``;
