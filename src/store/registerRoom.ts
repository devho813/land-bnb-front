import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BedType } from "../types/room";
import { getNumber } from "../utils";

type RegisterRoomState = {
  largeBuildingType: string | null;
  buildingType: string | null;
  roomType: string | null;
  isSetUpForGuest: boolean | null;
  maximumGuestCount: number;
  bedRoomCount: number;
  bedCount: number;
  bedList: Array<{ id: number; beds: { type: BedType; count: number } }>;
  publicBedList: Array<{ type: BedType; count: number }>;
};

const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetUpForGuest: null,
  maximumGuestCount: 1,
  bedRoomCount: 1,
  bedCount: 1,
  bedList: [],
  publicBedList: []
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
    setRoomType(state, action: PayloadAction<string>) {
      state.roomType = action.payload;
      return state;
    },
    setIsSetUpForGuest(state, action: PayloadAction<boolean>) {
      state.isSetUpForGuest = action.payload;
      return state;
    },
    setMaximumGuestCount(state, action: PayloadAction<number>) {
      state.maximumGuestCount = action.payload;
      return state;
    },
    setBedRoomCount(state, action: PayloadAction<string>) {
      state.bedRoomCount = getNumber(action.payload) || 0;
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
