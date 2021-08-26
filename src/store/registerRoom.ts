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
  bedList: Array<{ id: number; beds: Array<{ type: BedType; count: number }> }>;
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
  publicBedList: [],
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
      const bedRoomCount = getNumber(action.payload) || 0;
      state.bedRoomCount = bedRoomCount;

      if (bedRoomCount > state.bedList.length) {
        const addBedList = Array.from(
          { length: bedRoomCount - state.bedList.length },
          (_, i) => ({ id: state.bedList.length + i + 1, beds: [] })
        );
        state.bedList = [...state.bedList, ...addBedList];
      } else {
        state.bedList = state.bedList.filter((_, i) => i < bedRoomCount);
      }

      return state;
    },
    setBedCount(state, action: PayloadAction<number>) {
      state.bedCount = action.payload;
      return state;
    },
    setBedTypeCount(
      state,
      action: PayloadAction<{ bedroomId: number; type: BedType; count: number }>
    ) {
      const { bedroomId, count, type } = action.payload;
      const bedroom = state.bedList[bedroomId - 1];
      const prevBeds = bedroom.beds;
      const index = prevBeds.findIndex((bed) => bed.type === type);
      if (index === -1) {
        state.bedList[bedroomId - 1].beds = [...prevBeds, { type, count }];
        return state;
      }
      if (count === 0) {
        state.bedList[bedroomId - 1].beds.splice(index, 1);
      } else {
        state.bedList[bedroomId - 1].beds[index].count = count;
      }
      return state;
    },
  },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
