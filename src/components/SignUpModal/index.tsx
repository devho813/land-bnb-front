import { inputWrapper, modalCloseXIcon, SignUpModalContainer } from "./styles";
import CloseXIcon from "../../../public/assets/modal_close_x_icon.svg";
import MailIcon from "../../../public/assets/mail.svg";
import PersonIcon from "../../../public/assets/person.svg";
import OpenedEyeIcon from "../../../public/assets/opened_eye.svg";
import ClosedEyeIcon from "../../../public/assets/closed_eye.svg"

function SignUpModal() {
  return (
    <div css={SignUpModalContainer}>
      <CloseXIcon css={modalCloseXIcon} />
      <div css={inputWrapper}>
        <input type="email" name="email" placeholder="이메일 주소" />
        <MailIcon />
      </div>
      <div css={inputWrapper}>
        <input type="text" placeholder="이름(예: 길동)" />
        <PersonIcon />
      </div>
      <div css={inputWrapper}>
        <input type="text" placeholder="성(예: 홍)" />
        <PersonIcon />
      </div>
      <div css={inputWrapper}>
        <input type="password" placeholder="비밀번호 설정하기" />
        <OpenedEyeIcon />
      </div>
    </div>
  );
}

export default SignUpModal;
