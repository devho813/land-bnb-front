import { inputWrapper, modalCloseXIcon, passwordWrapper, SignUpModalContainer } from "./styles";
import CloseXIcon from "../../../public/assets/modal_close_x_icon.svg";
import MailIcon from "../../../public/assets/mail.svg";
import PersonIcon from "../../../public/assets/person.svg";
import OpenedEyeIcon from "../../../public/assets/opened_eye.svg";
import ClosedEyeIcon from "../../../public/assets/closed_eye.svg";
import Input from "../common/Input";
import React, { useState } from "react";

function SignUpModal() {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firtstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };
  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const toggleHidePassword = () => {
    setHidePassword((prevState) => !prevState);
  };

  return (
    <div css={SignUpModalContainer}>
      <CloseXIcon css={modalCloseXIcon} />
      <div css={inputWrapper}>
        <Input
          type="email"
          name="email"
          placeholder="이메일 주소"
          icon={<MailIcon />}
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="이름(예: 길동)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="성(예: 홍)"
          icon={<PersonIcon />}
          value={firtstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div css={[inputWrapper, passwordWrapper]}>
        <Input
          type={hidePassword ? "password" : "text"}
          placeholder="비밀번호 설정하기"
          icon={
            hidePassword ? (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            )
          }
          value={password}
          onChange={onChangePassword}
        />
      </div>
    </div>
  );
}

export default SignUpModal;