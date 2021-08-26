import { useState } from "react";
import { BedType } from "../../../types/room";
import Button from "../../common/Button";
import Selector from "../../common/Selector";
import {
  container,
  registerRoomBedTypeBedroom,
  registerRoomBedTypeBedroomCounts,
  registerRoomBedTypeBedroomText,
  registerRoomBedTypeSelectorWrapper,
  registerRoomBedTypeTop,
} from "./styles";

interface IProps {
  bedRoom: { id: number; beds: Array<{ type: BedType; count: number }> };
}

function RegisterRoomBadTypes({ bedRoom }: IProps) {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <li css={container}>
      <div css={registerRoomBedTypeTop}>
        <div css={registerRoomBedTypeBedroomText}>
          <p css={registerRoomBedTypeBedroom}>{bedRoom.id}번 침실</p>
          <p css={registerRoomBedTypeBedroomCounts}>
            침대 {bedRoom.beds.length}개
          </p>
        </div>
        <Button styleType="register" color="white" onClick={toggleOpened}>
          {opened && "완료"}
          {!opened && bedRoom.beds.length === 0
            ? "침대 추가하기"
            : "침대 수정하기"}
        </Button>
      </div>
      {opened && (
        <div css={registerRoomBedTypeSelectorWrapper}>
          <Selector
            type="register"
            defaultValue="다른 침대 추가"
            value="다른 침대 추가"
            disabledOption="다른 침대 추가"
            options={["다른 침대 추가"]}
          />
        </div>
      )}
    </li>
  );
}
export default RegisterRoomBadTypes;
