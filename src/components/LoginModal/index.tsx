import {
  container,
  loginInputWrapper,
  loginModalSetSignUp,
  loginModalSubmitButtonWrapper,
  loginPasswordInputWrapper,
  modalCloseXIcon,
} from "./styles";
import CloseXIcon from "../../../public/assets/modal_close_x_icon.svg";
import MailIcon from "../../../public/assets/mail.svg";
import ClosedEyeIcon from "../../../public/assets/closed_eye.svg";
import Input from "../common/Input";
import Button from "../common/Button";

interface IProps {
  closeModal: () => void;
}

function LoginModal({ closeModal }: IProps) {
  return (
    <form css={container}>
      <CloseXIcon css={modalCloseXIcon} onClick={closeModal} />
      <div css={loginInputWrapper}>
        {/* <Input
          type="email"
          placeholder="이메일 주소"
          name="email"
          icon={<MailIcon />}
        /> */}
      </div>
      <div css={[loginInputWrapper, loginPasswordInputWrapper]}>
        {/* <Input
          type="password"
          placeholder="비밀번호 설정하기"
          icon={<ClosedEyeIcon />}
        /> */}
      </div>
      <div css={loginModalSubmitButtonWrapper}>
        <Button type="submit">로그인</Button>
      </div>
      <p>
        이미 에어비엔비 계정이 있나요?
        <span css={loginModalSetSignUp}>회원가입</span>
      </p>
    </form>
  );
}

export default LoginModal;
