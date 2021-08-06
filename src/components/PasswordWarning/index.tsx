import { container } from "./styles";
import RedXIcon from "../../../public/assets/red_x_icon.svg";
import GreenCheckIcon from "../../../public/assets/green_check_icon.svg";

interface IProps {
  isValid: boolean;
  text: string;
}

function PasswordWarning({ isValid, text }: IProps) {
  return (
    <div css={container} className={isValid ? "isValid" : ""}>
      {isValid ? <GreenCheckIcon /> : <RedXIcon />}
      {text}
    </div>
  );
}

export default PasswordWarning;
