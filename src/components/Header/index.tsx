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
import SignUpModal from "../SignUpModal";
import useModal from "../../hooks/useModal";
import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import { useSelector } from "../../store";
import HamburgerIcon from "../../../public/assets/hamburger.svg";

function Header() {
  const { openModal, closeModal, ModalPortal } = useModal();
  const user = useSelector((state) => state.user);

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
          <img
            src={user.profileImage}
            alt="profile"
          />
        </button>
      ) : (
        <div css={authButtons}>
          <button type="button" css={signUpButton} onClick={openModal}>
            회원가입
          </button>
          <button type="button" css={loginButton}>
            로그인
          </button>
        </div>
      )}
      <ModalPortal>
        <SignUpModal closeModal={closeModal} />
      </ModalPortal>
    </header>
  );
}

export default Header;
