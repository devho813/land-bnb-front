import DatePicker from "../../common/DatePicker";
import { container } from "./styles";

function RegisterRoomDate() {
  return (
    <div css={container}>
      <h2>예약 가능 여부 설정하기</h2>
      <h3>11단계</h3>
      <DatePicker onChange={(date) => console.log(date)} />
    </div>
  );
}

export default RegisterRoomDate;
