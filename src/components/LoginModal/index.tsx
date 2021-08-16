import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
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
import OpenedEyeIcon from "../../../public/assets/opened_eye.svg";
import Input from "../common/Input";
import Button from "../common/Button";
import { authActions } from "../../store/auth";

interface IProps {
  closeModal: () => void;
}

function LoginModal({ closeModal }: IProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordHided, setIsPasswordHided] = useState(true);

  const dispatch = useDispatch();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordHiding = () => {
    setIsPasswordHided((prevState) => !prevState);
  };

  const onClickSignUpButton = () => {
    dispatch(authActions.setAuthMode("SIGN_UP"));
  };

  return (
    <form css={container}>
      <CloseXIcon css={modalCloseXIcon} onClick={closeModal} />
      <div css={loginInputWrapper}>
        <Input
          type="email"
          placeholder="이메일 주소"
          name="email"
          icon={<MailIcon />}
          onChange={onChangeEmail}
          value={email}
          useValidation
          isValid={!!email}
          errorMessage="이메일이 필요합니다."
        />
      </div>
      <div css={[loginInputWrapper, loginPasswordInputWrapper]}>
        <Input
          type={isPasswordHided ? "password" : "text"}
          placeholder="비밀번호 설정하기"
          icon={
            isPasswordHided ? (
              <ClosedEyeIcon onClick={togglePasswordHiding} />
            ) : (
              <OpenedEyeIcon onClick={togglePasswordHiding} />
            )
          }
          onChange={onChangePassword}
          value={password}
          useValidation
          isValid={!!password}
          errorMessage="비밀번호를 입력하세요"
        />
      </div>
      <div css={loginModalSubmitButtonWrapper}>
        <Button type="submit">로그인</Button>
      </div>
      <p>
        이미 에어비엔비 계정이 있나요?
        <span
          css={loginModalSetSignUp}
          onClick={onClickSignUpButton}
          role="presentation"
        >
          회원가입
        </span>
      </p>
    </form>
  );
}

export default LoginModal;
