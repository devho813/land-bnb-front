import Link from "next/link";
import AirbnbLogoIcon from "../../../public/assets/logo.svg";
import AirbnbLogoTextIcon from "../../../public/assets/logo_text.svg";
import { useSelector } from "../../store";

import { headerContainer, logo, logoWrapper } from "./styles";
import HeaderAuth from "../HeaderAuth";
import HeaderUserProfile from "../HeaderUserProfile";

function Header() {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <header css={headerContainer}>
      <Link href="/">
        <div css={logoWrapper}>
          <AirbnbLogoIcon css={logo} />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      {isLogged ? <HeaderUserProfile /> : <HeaderAuth />}
    </header>
  );
}

export default Header;
