import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { bedroomCountList } from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import Counter from "../../common/Counter";
import Selector from "../../common/Selector";
import {
  container,
  registerRoomBedCountWrapper,
  registerRoomBedroomCountWrapper,
  registerRoomBedTypeInfo,
  registerRoomMaximumGuestCountWrapper,
  roomRegisterStepInfo,
} from "./styles";

function RegisterRoomBedrooms() {
  const { maximumGuestCount, bedRoomCount, bedCount } = useSelector(
    (state) => state.registerRoom
  );
  const dispatch = useDispatch();

  const onChangeMaximumGuestCounter = (value: number) => () => {
    dispatch(registerRoomActions.setMaximumGuestCount(value));
  };

  const onChangeBedroomCount = (e: ChangeEvent<HTMLSelectElement>) => () => {
    dispatch(registerRoomActions.setBedRoomCount(e.target.value));
  };

  const onChangeBedCount = (value: number) => () => {
    dispatch(registerRoomActions.setBedCount(value));
  };

  return (
    <div css={container}>
      <h2>숙소에 얼마나 많은 인원이 숙박할 수 있나요?</h2>
      <h3>2단계</h3>
      <p css={roomRegisterStepInfo}>
        모든 게스트가 편안하게 숙박할 수 있도록 침대가 충분히 구비되어 있는지
        확인하세요.
      </p>

      <div css={registerRoomMaximumGuestCountWrapper}>
        <Counter
          label="최대 숙박 인원"
          minValue={1}
          value={maximumGuestCount}
          onChangeCount={onChangeMaximumGuestCounter}
          increaseNum={1}
        />
      </div>
      <div css={registerRoomBedroomCountWrapper}>
        <Selector
          type="register"
          value={`침실 ${bedRoomCount}개`}
          onChange={onChangeBedroomCount}
          label="게스트가 사용할 수 있는 침실은 몇 개인가요?"
          options={bedroomCountList}
          disabledOption="침실 개수"
        />
      </div>
      <div css={registerRoomBedCountWrapper}>
        <Counter
          label="침대"
          value={bedCount}
          onChangeCount={onChangeBedCount}
          minValue={1}
          increaseNum={1}
        />
      </div>
      <h4>침대 유형</h4>
      <p css={registerRoomBedTypeInfo}>
        각 침실에 놓인 침대 유형을 명시하면 숙소에 침대가 어떻게 구비되어 있는지
        게스트가 잘 파악할 수 있습니다.
      </p>
    </div>
  );
}

export default RegisterRoomBedrooms;
