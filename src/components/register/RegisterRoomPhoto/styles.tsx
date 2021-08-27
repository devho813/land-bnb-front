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

export const registerRoomUploadPhotoWrapper = css`
  width: 858px;
  height: 433px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${palette.gray_bb};
  border-radius: 6px;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  img {
    width: 100%;
    max-height: 100%;
  }
`;
