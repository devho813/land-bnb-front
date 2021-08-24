import { container, roomRegisterStepInfo } from "./styles";

function RegisterRoomBedrooms() {
  return (
    <div css={container}>
      <h2>숙소에 얼마나 많은 인원이 숙박할 수 있나요?</h2>
      <h3>2단계</h3>
      <p css={roomRegisterStepInfo}>
        모든 게스트가 편안하게 숙박할 수 있도록 침대가 충분히 구비되어 있는지
        확인하세요.
      </p>
    </div>
  );
}

export default RegisterRoomBedrooms;
