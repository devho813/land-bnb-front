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
      <h2>????????? ????????? ???????????????.</h2>
      <h3>4??????</h3>
      <p css={registerRoomStepInfo}>
        ????????? ?????? ????????? ???????????? ????????? ????????? ????????? ???????????????.
      </p>

      <Button
        color="dark_cyan"
        colorReverse
        icon={<NavigationIcon />}
        onClick={onClickGetCurrentLocation}
      >
        {loading ? "?????? ?????? ??????" : "???????????? ???..."}
      </Button>

      <div css={registerRoomLocationCountrySelectorWrapper}>
        <Selector
          type="register"
          useValidation={false}
          options={countryList}
          defaultValue="??????/?????? ??????"
          disabledOption="??????/?????? ??????"
          label="??????/??????"
          value={country}
          onChange={onChangeCountry}
        />
      </div>
      <div css={registerRoomLocationCityDistrict}>
        <Input label="???/???" value={city} onChange={onChangeCity} />
        <Input label="???/???/???" value={district} onChange={onChangeDistrict} />
      </div>
      <div css={registerRoomLocationStreetAddress}>
        <Input
          label="???????????????"
          value={streetAddress}
          onChange={onChangeStreetAddress}
        />
      </div>
      <div css={registerRoomLocationDetailAddress}>
        <Input
          label="?????????(?????? ??????)"
          useValidation={false}
          value={detailAddress}
          onChange={onChangeDetailAddress}
        />
      </div>
      <div css={registerRoomLocationPostcode}>
        <Input label="????????????" value={postcode} onChange={onChangePostcode} />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/bedrooms"
        nextHref="/room/register/geometry"
      />
    </div>
  );
}

export default RegisterLocation;
