import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import { container, logo, logoWrapper } from "./styles";
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
    </header>
  );
}

export default Header;
