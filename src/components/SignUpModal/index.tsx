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
import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Selector from "../common/Selector";
import { dayList, monthList, yearList } from "../../lib/staticData";
import Button from "../common/Button";
import { signupAPI } from "../../lib/api/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import useValidateMode from "../../hooks/useValidateMode";

const PASSWORD_MIN_LENGTH = 8;

function SignUpModal() {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const [birthYear, setBirthYear] = useState<string | undefined>();
  const [birthDay, setBirthDay] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<string | undefined>();

  const dispatch = useDispatch();
  const { setValidateMode } = useValidateMode();

  const [passwordFocused, setPasswordFocused] = useState(false);
  const isPasswordHasNameOrEmail = useMemo(() => {
    // password가 이름이나 이메일을 포함하는지 체크
    if (
      !password ||
      !email ||
      password.includes(lastname) ||
      password.includes(email.split("@")[0])
    ) {
      return false;
    }

    return true;
  }, [password, lastname, email]);
  const isPasswordOverMinLength = useMemo(() => {
    // 비밀번호 최소 자릿수 이상인지
    if (password.length < PASSWORD_MIN_LENGTH) {
      return false;
    }

    return true;
  }, [password]);
  const isPasswordHasNumberOrSymbol = useMemo(() => {
    // 기호나 숫자를 포함하는지
    const regExp1 = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
    const regExp2 = /[0-9]/g;

    if (!regExp1.test(password) && !regExp2.test(password)) {
      return false;
    }

    return true;
  }, [password]);

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

  const onFocusPassword = () => {
    setPasswordFocused(true);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMode(true);

    if (!email || !lastname || !firstname || !password) {
      return undefined;
    }

    try {
      const body = {
        email,
        lastname,
        firstname,
        password,
        birthday: new Date(
          `${birthYear?.replace("년", "")}-${birthMonth?.replace(
            "월",
            ""
          )}-${birthDay?.replace("일", "")}`
        ).toISOString(),
      };

      const { data } = await signupAPI(body);
      dispatch(userActions.setLoggedUser(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form css={SignUpModalContainer} onSubmit={onSubmit}>
      <CloseXIcon css={modalCloseXIcon} />
      <div css={inputWrapper}>
        <Input
          type="email"
          name="email"
          placeholder="이메일 주소"
          icon={<MailIcon />}
          value={email}
          onChange={onChangeEmail}
          useValidation
          isValid={!!email}
          errorMessage="이메일이 필요합니다."
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="이름(예: 길동)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
          useValidation
          isValid={!!lastname}
          errorMessage="이름을 입력하세요."
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="성(예: 홍)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
          useValidation
          isValid={!!firstname}
          errorMessage="성을 입력하세요."
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
          useValidation
          isValid={!!password}
          errorMessage="비밀번호를 입력하세요"
          onFocus={onFocusPassword}
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
    </form>
  );
}

export default SignUpModal;
