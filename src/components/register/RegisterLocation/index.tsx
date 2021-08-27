import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { countryList } from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import Input from "../../common/Input";
import Selector from "../../common/Selector";
import {
  container,
  registerRoomLocationCityDistrict,
  registerRoomLocationCountrySelectorWrapper,
  registerRoomLocationDetailAddress,
  registerRoomLocationPostcode,
  registerRoomLocationStreetAddress,
  registerRoomStepInfo,
} from "./styles";

function RegisterLocation() {
  const country = useSelector((state) => state.registerRoom.country);
  const city = useSelector((state) => state.registerRoom.city);
  const district = useSelector((state) => state.registerRoom.district);
  const streetAddress = useSelector(
    (state) => state.registerRoom.streetAddress
  );
  const detailAddress = useSelector(
    (state) => state.registerRoom.detailAddress
  );
  const postcode = useSelector((state) => state.registerRoom.postcode);
  const dispatch = useDispatch();

  const onChangeCountry = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(registerRoomActions.setCountry(e.target.value));
  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(registerRoomActions.setCity(e.target.value));
  const onChangeDistrict = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(registerRoomActions.setDistrict(e.target.value));
  const onChangeStreetAddress = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(registerRoomActions.setStreetAddress(e.target.value));
  const onChangeDetailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(registerRoomActions.setDetailAddress(e.target.value));
  const onChangePostcode = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(registerRoomActions.setPostcode(e.target.value));

  return (
    <div css={container}>
      <h2>숙소의 위치를 알려주세요.</h2>
      <h3>4단계</h3>
      <p css={registerRoomStepInfo}>
        정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
      </p>

      <div css={registerRoomLocationCountrySelectorWrapper}>
        <Selector
          type="register"
          useValidation={false}
          options={countryList}
          defaultValue="국가/지역 선택"
          disabledOption="국가/지역 선택"
          label="국가/지역"
          value={country}
          onChange={onChangeCountry}
        />
      </div>
      <div css={registerRoomLocationCityDistrict}>
        <Input label="시/도" value={city} onChange={onChangeCity} />
        <Input label="시/군/구" value={district} onChange={onChangeDistrict} />
      </div>
      <div css={registerRoomLocationStreetAddress}>
        <Input
          label="도로명주소"
          value={streetAddress}
          onChange={onChangeStreetAddress}
        />
      </div>
      <div css={registerRoomLocationDetailAddress}>
        <Input
          label="동호수(선택 사항)"
          useValidation={false}
          value={detailAddress}
          onChange={onChangeDetailAddress}
        />
      </div>
      <div css={registerRoomLocationPostcode}>
        <Input label="우편번호" value={postcode} onChange={onChangePostcode} />
      </div>
    </div>
  );
}

export default RegisterLocation;
