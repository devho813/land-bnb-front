import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { countryList } from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Selector from "../../common/Selector";
import NavigationIcon from "../../../../public/assets/navigation.svg";
import {
  container,
  registerRoomLocationCityDistrict,
  registerRoomLocationCountrySelectorWrapper,
  registerRoomLocationDetailAddress,
  registerRoomLocationPostcode,
  registerRoomLocationStreetAddress,
  registerRoomStepInfo,
} from "./styles";
import { getLocationInfoAPI } from "../../../lib/api/map";
import RegisterRoomFooter from "../RegisterRoomFooter";

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
  const [loading, setLoading] = useState(false);

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

  const onSuccessGetLocation = async ({
    coords: { latitude, longitude },
  }: // eslint-disable-next-line no-undef
  GeolocationPosition) => {
    try {
      const { data: currentLocation } = await getLocationInfoAPI(
        latitude,
        longitude
      );
      dispatch(registerRoomActions.setCountry(currentLocation.country));
      dispatch(registerRoomActions.setCity(currentLocation.city));
      dispatch(registerRoomActions.setDistrict(currentLocation.district));
      dispatch(
        registerRoomActions.setStreetAddress(currentLocation.streetAddress)
      );
      dispatch(registerRoomActions.setPostcode(currentLocation.postcode));
      dispatch(registerRoomActions.setLatitude(currentLocation.latitude));
      dispatch(registerRoomActions.setLongitude(currentLocation.longitude));
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onClickGetCurrentLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(onSuccessGetLocation, (error) => {
      console.error(error.message);
    });
  };

  return (
    <div css={container}>
      <h2>숙소의 위치를 알려주세요.</h2>
      <h3>4단계</h3>
      <p css={registerRoomStepInfo}>
        정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
      </p>

      <Button
        color="dark_cyan"
        colorReverse
        icon={<NavigationIcon />}
        onClick={onClickGetCurrentLocation}
      >
        {loading ? "현재 위치 사용" : "불러오는 중..."}
      </Button>

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
      <RegisterRoomFooter
        prevHref="/room/register/bedrooms"
        nextHref="/room/register/geometry"
      />
    </div>
  );
}

export default RegisterLocation;
