import { ChangeEvent, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  apartmentBuildingTypeList,
  bnbBuildingTypeList,
  boutiquesHotelBuildingTypeList,
  houseBuildingTypeList,
  isSetUpForGuestOptions,
  largeBuildingTypeList,
  roomTypeRadioOptions,
  secondaryUnitBuildingTypeList,
  uniqueSpaceBuildingTypeList,
} from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import RadioGroup from "../../common/RadioGroup";
import Selector from "../../common/Selector";
import RegisterRoomFooter from "../RegisterRoomFooter";
import {
  container,
  registerRoomBuildingSelectorWrapper,
  registerRoomIsSetupForGuestRadio,
  registerRoomTypeRadio,
} from "./styles";

function RegisterRoomBuilding() {
  const { buildingType, largeBuildingType, roomType, isSetUpForGuest } =
    useSelector((state) => state.registerRoom);
  const dispatch = useDispatch();

  const isValid = useMemo(() => {
    if (
      !largeBuildingTypeList ||
      !buildingType ||
      !roomType ||
      isSetUpForGuest === null
    ) {
      return false;
    }

    return true;
  }, [buildingType, largeBuildingType, roomType, isSetUpForGuest]);

  const detailBuildingOptions = useMemo(() => {
    switch (largeBuildingType) {
      case "아파트":
        dispatch(
          registerRoomActions.setBuildingType(apartmentBuildingTypeList[0])
        );
        return apartmentBuildingTypeList;
      case "공동주택":
        dispatch(registerRoomActions.setBuildingType(houseBuildingTypeList[0]));
        return houseBuildingTypeList;
      case "별채":
        dispatch(
          registerRoomActions.setBuildingType(secondaryUnitBuildingTypeList[0])
        );
        return secondaryUnitBuildingTypeList;
      case "독특한 숙소":
        dispatch(
          registerRoomActions.setBuildingType(uniqueSpaceBuildingTypeList[0])
        );
        return uniqueSpaceBuildingTypeList;
      case "B&B":
        dispatch(registerRoomActions.setBuildingType(bnbBuildingTypeList[0]));
        return bnbBuildingTypeList;
      case "부티크호텔":
        dispatch(
          registerRoomActions.setBuildingType(boutiquesHotelBuildingTypeList[0])
        );
        return boutiquesHotelBuildingTypeList;
      default:
        return [];
    }
  }, [largeBuildingType]);

  const onChangeLargeBuildingType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(registerRoomActions.setLargeBuildingType(e.target.value));
  };

  const onChangeBuildingType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(registerRoomActions.setBuildingType(e.target.value));
  };

  const onChangeRoomType = (value: any) => () => {
    dispatch(registerRoomActions.setRoomType(value));
  };

  const onChangeIsSetUpForGuest = (value: any) => () => {
    dispatch(registerRoomActions.setIsSetUpForGuest(value));
  };

  return (
    <div css={container}>
      <h2>등록할 숙소 종류는 무엇인가요?</h2>
      <h3>1단계</h3>
      <div css={registerRoomBuildingSelectorWrapper}>
        <Selector
          type="register"
          value={largeBuildingType || undefined}
          label="우선 범위를 좁혀볼까요?"
          options={largeBuildingTypeList}
          disabledOption="하나를 선택해주세요."
          onChange={onChangeLargeBuildingType}
          isValid={!!largeBuildingType}
        />
      </div>
      <div css={registerRoomBuildingSelectorWrapper}>
        <Selector
          type="register"
          value={buildingType || undefined}
          disabled={!largeBuildingType}
          label="건물 유형을 선택하세요."
          options={detailBuildingOptions}
          disabledOption="아파트"
          onChange={onChangeBuildingType}
          isValid={!!buildingType}
        />
      </div>
      {buildingType && (
        <div css={registerRoomTypeRadio}>
          <RadioGroup
            label="게스트가 묵게 될 숙소 유형을 골라주세요."
            value={roomType || undefined}
            options={roomTypeRadioOptions}
            onChangeRadio={onChangeRoomType}
            isValid={!!roomType}
          />
        </div>
      )}
      <div css={registerRoomIsSetupForGuestRadio}>
        <RadioGroup
          label="게스트만 사용하도록 만들어진 숙소인가요?"
          value={isSetUpForGuest}
          onChange={onChangeIsSetUpForGuest}
          options={isSetUpForGuestOptions}
          isValid={isSetUpForGuest !== null}
        />
      </div>
      <RegisterRoomFooter
        isValid={isValid}
        prevHref="/"
        nextHref="/room/register/bedrooms"
      />
    </div>
  );
}

export default RegisterRoomBuilding;
