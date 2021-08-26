import { ChangeEvent, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { bedTypes } from "../../../lib/staticData";
import { registerRoomActions } from "../../../store/registerRoom";
import { BedType } from "../../../types/room";
import Button from "../../common/Button";
import Counter from "../../common/Counter";
import Selector from "../../common/Selector";
import {
  container,
  registerRoomBedTypeBedroom,
  registerRoomBedTypeBedroomCounts,
  registerRoomBedTypeBedroomText,
  registerRoomBedTypeCounter,
  registerRoomBedTypeCounters,
  registerRoomBedTypeSelectorWrapper,
  registerRoomBedTypeTop,
} from "./styles";

interface IProps {
  bedRoom: { id: number; beds: Array<{ type: BedType; count: number }> };
}

function RegisterRoomBadTypes({ bedRoom }: IProps) {
  const [opened, setOpened] = useState(false);
  const [activeBedOptions, setActiveBedOptions] = useState<BedType[]>([]);
  const dispatch = useDispatch();

  const lastBedOptions = useMemo(() => {
    return bedTypes.filter((bedType) => !activeBedOptions.includes(bedType));
  }, [activeBedOptions]);

  const toggleOpened = () => {
    setOpened((prevState) => !prevState);
  };

  const onChangeSelector = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveBedOptions((prevState) => [
      ...prevState,
      e.target.value as BedType,
    ]);
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
        <div css={registerRoomBedTypeCounters}>
          {activeBedOptions.map((type) => (
            <div css={registerRoomBedTypeCounter} key={type}>
              <Counter
                label={type}
                value={
                  bedRoom.beds.find((bed) => bed.type === type)?.count || 0
                }
                onChangeCount={(value: number) => () => {
                  dispatch(
                    registerRoomActions.setBedTypeCount({
                      bedroomId: bedRoom.id,
                      type,
                      count: value,
                    })
                  );
                }}
              />
            </div>
          ))}
        </div>
      )}
      {opened && (
        <div css={registerRoomBedTypeSelectorWrapper}>
          <Selector
            type="register"
            defaultValue="다른 침대 추가"
            value="다른 침대 추가"
            disabledOption="다른 침대 추가"
            options={lastBedOptions}
            useValidation
            onChange={onChangeSelector}
          />
        </div>
      )}
    </li>
  );
}
export default RegisterRoomBadTypes;
