import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import { useSelector } from "../../store";
import HamburgerIcon from "../../../public/assets/hamburger.svg";
import { authActions } from "../../store/auth";
import AuthModal from "../AuthModal";
import useModal from "../../hooks/useModal";
import {
  authButtons,
  headerContainer,
  headerUserProfile,
  loginButton,
  logo,
  logoWrapper,
  signUpButton,
  userMenu,
  userMenuDivider,
} from "./styles";
import { logoutAPI } from "../../lib/api/auth";
import { userActions } from "../../store/user";

function Header() {
  const { openModal, closeModal, ModalPortal } = useModal();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);

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
    <header css={headerContainer}>
      <Link href="/">
        <div css={logoWrapper}>
          <AirbnbLogoIcon css={logo} />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      {user.isLogged ? (
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <button type="button" css={headerUserProfile}>
            <HamburgerIcon />
            <img src={user.profileImage} alt="profile" />
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
      ) : (
        <div css={authButtons}>
          <button
            type="button"
            css={signUpButton}
            onClick={() => {
              dispatch(authActions.setAuthMode("SIGN_UP"));
              openModal();
            }}
          >
            회원가입
          </button>
          <button
            type="button"
            css={loginButton}
            onClick={() => {
              dispatch(authActions.setAuthMode("SIGN_IN"));
              openModal();
            }}
          >
            로그인
          </button>
        </div>
      )}
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </header>
  );
}

export default Header;
