import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import {
  authButtons,
  container,
  loginButton,
  logo,
  logoWrapper,
  signUpButton,
} from "./styles";
import Link from "next/link";

function Header() {
  return (
    <header css={container}>
      <Link href="/">
        <div css={logoWrapper}>
          <AirbnbLogoIcon css={logo} />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      <div css={authButtons}>
        <button type="button" css={signUpButton}>
          회원가입
        </button>
        <button type="button" css={loginButton}>
          로그인
        </button> 
      </div>
    </header>
  );
}

export default Header;
