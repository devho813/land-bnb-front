import { ChangeEvent } from "react";
import { isEmpty } from "lodash";
import { useSelector } from "../../../store";
import {
  container,
  registerRoomStepInfo,
  registerRoomUploadPhotoWrapper,
} from "./styles";
import UploadIcon from "../../../../public/assets/upload.svg";
import Button from "../../common/Button";

function RegisterRoomPhoto() {
  const photos = useSelector((state) => state.registerRoom.photos);

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    console.log(files);
  };

  return (
    <div css={container}>
      <h2>숙소 사진 올리기</h2>
      <h3>7단계</h3>
      <p css={registerRoomStepInfo}>
        게스트가 사진을 보고 숙소의 느낌을 생생히 떠올려볼 수 있도록 해주세요.
        우선 사진 1장을 업로드하고 숙소를 등록한 후에 추가할 수 있습니다.
      </p>
      {isEmpty(photos) && (
        <div css={registerRoomUploadPhotoWrapper}>
          <input type="file" accept="image/*" onChange={uploadImage} />
          <Button icon={<UploadIcon />} color="bittersweet" width="167px">
            사진 업로드
          </Button>
        </div>
      )}
    </div>
  );
}

export default RegisterRoomPhoto;
