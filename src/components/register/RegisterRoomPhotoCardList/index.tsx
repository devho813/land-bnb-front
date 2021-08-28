import {
  container,
  registerRoomAddMorePhotoCard,
  registerRoomFirstPhotoWrapper,
  registerRoomPhotoCard,
  registerRoomPhotoInteractionButtons,
} from "./styles";
import TrashCanIcon from "../../../../public/assets/trash_can.svg";
import PencilIcon from "../../../../public/assets/pencil.svg";
import GrayPlusIcon from "../../../../public/assets/gray_plus.svg";

interface IProps {
  photos: string[];
}

function RegisterRoomPhotoCardList({ photos }: IProps) {
  return (
    <ul css={container}>
      {photos.map((photo, index) =>
        index === 0 ? (
          <li css={registerRoomFirstPhotoWrapper} key={index}>
            <img src={photo} alt={`숙소 사진 ${index + 1}`} />
            <div css={registerRoomPhotoInteractionButtons}>
              <button type="button" onClick={() => {}}>
                <TrashCanIcon />
              </button>
              <button type="button" onClick={() => {}}>
                <PencilIcon />
              </button>
            </div>
          </li>
        ) : (
          <li css={registerRoomPhotoCard} key={index}>
            <img src={photo} alt={`숙소 사진-${index + 1}`} />
            <div css={registerRoomPhotoInteractionButtons}>
              <button type="button" onClick={() => {}}>
                <TrashCanIcon />
              </button>
              <button type="button" onClick={() => {}}>
                <PencilIcon />
              </button>
            </div>
          </li>
        ))}
      <li css={registerRoomPhotoCard} role="presentation" onClick={() => {}}>
        <div css={registerRoomAddMorePhotoCard}>
          <GrayPlusIcon />
          추가하기
        </div>
      </li>
    </ul>
  );
}

export default RegisterRoomPhotoCardList;
