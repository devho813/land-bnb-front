import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
import useValidateMode from "../../hooks/useValidateMode";
import { loginAPI } from "../../lib/api/auth";
import { userActions } from "../../store/user";

interface IProps {
  closeModal: () => void;
}

function LoginModal({ closeModal }: IProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordHided, setIsPasswordHided] = useState(true);

  const dispatch = useDispatch();
  const { setValidateMode } = useValidateMode();

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordHiding = () => {
    setIsPasswordHided((prevState) => !prevState);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidateMode(true);

    const loginBody = {
      email,
      password,
    };

    try {
      const { data } = await loginAPI(loginBody);
      dispatch(userActions.setLoggedUser(data));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSignUpButton = () => {
    dispatch(authActions.setAuthMode("SIGN_UP"));
  };

  return (
    <form css={container} onSubmit={onSubmit}>
      <CloseXIcon css={modalCloseXIcon} onClick={closeModal} />
      <div css={loginInputWrapper}>
        <Input
          type="email"
          placeholder="????????? ??????"
          name="email"
          icon={<MailIcon />}
          onChange={onChangeEmail}
          value={email}
          useValidation
          isValid={!!email}
          errorMessage="???????????? ???????????????."
        />
      </div>
      <div css={[loginInputWrapper, loginPasswordInputWrapper]}>
        <Input
          type={isPasswordHided ? "password" : "text"}
          placeholder="???????????? ????????????"
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
          errorMessage="??????????????? ???????????????"
        />
      </div>
      <div css={loginModalSubmitButtonWrapper}>
        <Button type="submit" color="bittersweet">?????????</Button>
      </div>
      <p>
        ?????? ??????????????? ????????? ??????????
        <span
          css={loginModalSetSignUp}
          onClick={onClickSignUpButton}
          role="presentation"
        >
          ????????????
        </span>
      </p>
    </form>
  );
}

export default LoginModal;
