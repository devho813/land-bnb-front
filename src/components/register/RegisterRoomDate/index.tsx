import ko from "date-fns/locale/ko";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import DatePicker from "../../common/DatePicker";
import { container } from "./styles";

function RegisterRoomDate() {
  const startDate = useSelector((state) => state.registerRoom.startDate);
  const dispatch = useDispatch();

  const onChangeStartDate = (date: Date | null) => {
    dispatch(
      registerRoomActions.setStartDate(date ? date.toISOString() : null)
    );
  };

  return (
    <div css={container}>
      <h2>예약 가능 여부 설정하기</h2>
      <h3>11단계</h3>
      <DatePicker
        selected={startDate ? new Date(startDate) : null}
        onChange={onChangeStartDate}
        locale={ko}
      />
    </div>
  );
}

export default RegisterRoomDate;
