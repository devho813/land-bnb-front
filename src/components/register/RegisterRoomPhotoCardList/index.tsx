import { useDispatch } from "react-redux";
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
import { uploadFileAPI } from "../../../lib/api/file";
import { registerRoomActions } from "../../../store/registerRoom";

interface IProps {
  photos: string[];
}

function RegisterRoomPhotoCardList({ photos }: IProps) {
  const dispatch = useDispatch();

  const addPhoto = () => {
    const el = document.createElement("input");
    el.type = "file";
    el.accept = "image/*";
    el.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (files && files.length > 0) {
        const file = files[0];
        const formdata = new FormData();
        formdata.append("file", file);

        uploadFileAPI(formdata)
          .then(({ data }) => {
            dispatch(registerRoomActions.setPhotos(data));
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    };

    el.click();
  };

  const onDeletePhoto = (index: number) => () => {
    const newPhotos = photos.filter((_, i) => i !== index);
    dispatch(registerRoomActions.setPhotos(newPhotos));
  };

  const onEditPhoto = (index: number) => () => {
    const el = document.createElement("input");
    el.type = "file";
    el.accept = "image/*";
    el.onchange = (event) => {
      const { files } = event.target as HTMLInputElement;
      if (files && files.length > 0) {
        const file = files[0];
        const formdata = new FormData();
        formdata.append("file", file);

        uploadFileAPI(formdata)
          .then(({ data }) => {
            dispatch(registerRoomActions.setPhotos(data));
          })
          .catch((error) => {
            console.error(error.message);
          });
      }
    };

    el.click();
  };

  return (
    <ul css={container}>
      {photos.map((photo, index) =>
        index === 0 ? (
          <li css={registerRoomFirstPhotoWrapper} key={index}>
            <img src={photo} alt={`숙소 사진 ${index + 1}`} />
            <div css={registerRoomPhotoInteractionButtons}>
              <button type="button" onClick={onDeletePhoto(index)}>
                <TrashCanIcon />
              </button>
              <button type="button" onClick={onEditPhoto(index)}>
                <PencilIcon />
              </button>
            </div>
          </li>
        ) : (
          <li css={registerRoomPhotoCard} key={index}>
            <img src={photo} alt={`숙소 사진-${index + 1}`} />
            <div css={registerRoomPhotoInteractionButtons}>
              <button type="button" onClick={onDeletePhoto(index)}>
                <TrashCanIcon />
              </button>
              <button type="button" onClick={onEditPhoto(index)}>
                <PencilIcon />
              </button>
            </div>
          </li>
        ))}
      <li css={registerRoomPhotoCard} role="presentation" onClick={addPhoto}>
        <div css={registerRoomAddMorePhotoCard}>
          <GrayPlusIcon />
          추가하기
        </div>
      </li>
    </ul>
  );
}

export default RegisterRoomPhotoCardList;
