import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import Counter from "../../common/Counter";
import { container, registerRoomMaximumGuestCountWrapper, roomRegisterStepInfo } from "./styles";

function RegisterRoomBedrooms() {
  const maximumGuestCounter = useSelector(
    (state) => state.registerRoom.maximumGuestCount
  );
  const dispatch = useDispatch();

  const onChangeCounter = (value: number) => () => {
    dispatch(registerRoomActions.setMaximumGuestCount(value));
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
          value={maximumGuestCounter}
          onChangeCounter={onChangeCounter}
          increaseNum={1}
        />
      </div>
    </div>
  );
}

export default RegisterRoomBedrooms;
