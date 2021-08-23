import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomType } from "../types/registerRoom";

type RegisterRoomState = {
  largeBuildingType: string | null;
  buildingType: string | null;
  roomType: RoomType | null;
  isSetUpForGuest: string | null;
};

const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
};

const registerRoom = createSlice({
  name: "registerRoom",
  initialState,
  reducers: {
    setLargeBuildingType(state, action: PayloadAction<string>) {
      state.largeBuildingType = action.payload;
      return state;
    },
    setBuildingType(state, action: PayloadAction<string>) {
      state.buildingType = action.payload;
      return state;
    },
    setRoomType(state, action: PayloadAction<RoomType>) {
      state.roomType = action.payload;
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
