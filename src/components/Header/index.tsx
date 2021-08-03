import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import {
  authButtons,
  headerContainer,
  loginButton,
  logo,
  logoWrapper,
  signUpButton,
} from "./styles";
import Link from "next/link";
import SignUpModal from "../SignUpModal";
import useModal from "../../hooks/useModal";

function Header() {
  const { openModal, ModalPortal } = useModal();

  return (
    <header css={headerContainer}>
      <Link href="/">
        <div css={logoWrapper}>
          <AirbnbLogoIcon css={logo} />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      <div css={authButtons}>
        <button
          type="button"
          css={signUpButton}
          onClick={openModal}
        >
          회원가입
        </button>
        <button type="button" css={loginButton}>
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </header>
  );
}

export default Header;
