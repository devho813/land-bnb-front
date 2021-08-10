import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  authButtons,
  headerContainer,
  headerUserProfile,
  loginButton,
  logo,
  logoWrapper,
  signUpButton,
} from "./styles";
import useModal from "../../hooks/useModal";
import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import { useSelector } from "../../store";
import HamburgerIcon from "../../../public/assets/hamburger.svg";
import { authActions } from "../../store/auth";
import AuthModal from "../AuthModal";

function Header() {
  const { openModal, closeModal, ModalPortal } = useModal();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header css={headerContainer}>
      <Link href="/">
        <div css={logoWrapper}>
          <AirbnbLogoIcon css={logo} />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      {user.isLogged ? (
        <button type="button" css={headerUserProfile}>
          <HamburgerIcon />
          <img src={user.profileImage} alt="profile" />
        </button>
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
