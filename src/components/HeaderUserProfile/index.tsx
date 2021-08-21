import Link from "next/link";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import HamburgerIcon from "../../../public/assets/hamburger.svg";
import { logoutAPI } from "../../lib/api/auth";
import { useSelector } from "../../store";
import { userActions } from "../../store/user";
import { headerUserProfile, userMenu, userMenuDivider } from "./styles";

function HeaderUserProfile() {
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.user.profileImage);

  const onOutsideClick = () => {
    if (isUserMenuOpened) {
      setIsUserMenuOpened(false);
    }
  };

  const onClickRoomRegister = () => {
    setIsUserMenuOpened(false);
  };

  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <button type="button" css={headerUserProfile}>
        <HamburgerIcon />
        <img src={profileImage} alt="profile" />
      </button>
      {isUserMenuOpened && (
        <ul css={userMenu}>
          <li>숙소 관리</li>
          <Link href="/room/register/building">
            <a onClick={onClickRoomRegister} role="presentation">
              <li>숙소 등록하기</li>
            </a>
          </Link>
          <div css={userMenuDivider} />
          <li onClick={logout} role="presentation">
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
}

export default HeaderUserProfile;
