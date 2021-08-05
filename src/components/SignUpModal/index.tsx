import {
  inputWrapper,
  modalCloseXIcon,
  passwordWrapper,
  signUpBirthdatLabel,
  signUpModalBirthdayDaySelector,
  signUpModalBirthdayInfo,
  signUpModalBirthdayMonthSelector,
  signUpModalBirthdaySelectors,
  signUpModalBirthdayYearSelector,
  SignUpModalContainer,
  signUpModalSubmitButtonWrapper,
} from "./styles";
import CloseXIcon from "../../../public/assets/modal_close_x_icon.svg";
import MailIcon from "../../../public/assets/mail.svg";
import PersonIcon from "../../../public/assets/person.svg";
import OpenedEyeIcon from "../../../public/assets/opened_eye.svg";
import ClosedEyeIcon from "../../../public/assets/closed_eye.svg";
import Input from "../common/Input";
import React, { ChangeEvent, useState } from "react";
import Selector from "../common/Selector";
import { dayList, monthList, yearList } from "../../lib/staticData";
import Button from "../common/Button";

function SignUpModal() {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firtstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

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

  const onChangeBirthYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthYear(e.target.value);
  };
  const onChangeBirthDay = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthDay(e.target.value);
  };
  const onChangeBirthMonth = (e: ChangeEvent<HTMLSelectElement>) => {
    setBirthMonth(e.target.value);
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

      <p css={signUpBirthdatLabel}>생일</p>
      <p css={signUpModalBirthdayInfo}>
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
        에어비앤비 이용자에게 공개되지 않습니다.
      </p>
      <div css={signUpModalBirthdaySelectors}>
        <div css={signUpModalBirthdayMonthSelector}>
          <Selector
            options={monthList}
            disabledOption="월"
            defaultValue="월"
            onChange={onChangeBirthMonth}
            value={birthYear}
          />
        </div>
        <div css={signUpModalBirthdayDaySelector}>
          <Selector
            options={dayList}
            disabledOption="일"
            defaultValue="일"
            onChange={onChangeBirthDay}
            value={birthDay}
          />
        </div>
        <div css={signUpModalBirthdayYearSelector}>
          <Selector
            options={yearList}
            disabledOption="년"
            defaultValue="년"
            onChange={onChangeBirthYear}
            value={birthMonth}
          />
        </div>
      </div>
      <div css={signUpModalSubmitButtonWrapper}>
        <Button type="submit">가입 하기</Button>
      </div>
    </div>
  );
}

export default SignUpModal;
