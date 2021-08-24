import Link from "next/link";
import { useEffect, MouseEvent } from "react";
import BackArrowIcon from "../../../../public/assets/register_room_footer_back_arrow.svg";
import useValidateMode from "../../../hooks/useValidateMode";
import Button from "../../common/Button";
import { container, registerRoomFooterBack } from "./styles";

interface IProps {
  prevHref: string;
  nextHref: string;
  isValid?: boolean;
}

function RegisterRoomFooter({ prevHref, nextHref, isValid }: IProps) {
  const { setValidateMode } = useValidateMode();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const onClickNext = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isValid) {
      e.preventDefault();
      setValidateMode(true);
    }
  };

  return (
    <div css={container}>
      <Link href={prevHref}>
        <a css={registerRoomFooterBack}>
          <BackArrowIcon />
          뒤로
        </a>
      </Link>
      <Link href={nextHref}>
        <a>
          <Button color="dark_cyan" onClick={onClickNext}>
            계속
          </Button>
        </a>
      </Link>
    </div>
  );
}

export default RegisterRoomFooter;
