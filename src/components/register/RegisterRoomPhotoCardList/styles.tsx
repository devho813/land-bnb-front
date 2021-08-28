import { css } from "@emotion/react";
import palette from "../../../styles/palette";

export const container = css`
  width: 858px;
  margin: auto;

  & > li:nth-of-type(3n + 1) {
    margin-right: 0;
  }
`;

export const registerRoomPhotoInteractionButtons = css`
  display: none;
  position: absolute;
  top: 8px;
  right: 8px;

  button {
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    border: 0;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

    &:first-of-type {
      margin-right: 8px;
    }
  }
`;

export const registerRoomFirstPhotoWrapper = css`
  width: 858px;
  height: 433px;
  margin: 0 auto 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    ${registerRoomPhotoInteractionButtons} {
      display: flex;
    }
  }

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

export const registerRoomPhotoCard = css`
  position: relative;
  display: inline-block;
  width: calc((100% - 48px) / 3);
  height: 180px;
  border-radius: 6px;

  overflow: hidden;
  margin-right: 24px;
  margin-bottom: 24px;

  &:hover {
    ${registerRoomPhotoInteractionButtons} {
      display: flex;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const registerRoomAddMorePhotoCard = css`
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px dashed ${palette.gray_bb};
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 24px;
  margin-bottom: 24px;
  display: flex;

  svg {
    margin-bottom: 12px;
  }
`;
