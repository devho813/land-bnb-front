import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch } from "react-redux";
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
  signUpModalContainer,
  signUpModalSetLogin,
  signUpModalSubmitButtonWrapper,
} from "./styles";
import CloseXIcon from "../../../public/assets/modal_close_x_icon.svg";
import MailIcon from "../../../public/assets/mail.svg";
import PersonIcon from "../../../public/assets/person.svg";
import OpenedEyeIcon from "../../../public/assets/opened_eye.svg";
import ClosedEyeIcon from "../../../public/assets/closed_eye.svg";
import Input from "../common/Input";
import Selector from "../common/Selector";
import { dayList, monthList, yearList } from "../../lib/staticData";
import Button from "../common/Button";
import { signupAPI } from "../../lib/api/auth";
import { userActions } from "../../store/user";
import useValidateMode from "../../hooks/useValidateMode";
import PasswordWarning from "../PasswordWarning";
import { authActions } from "../../store/auth";

const PASSWORD_MIN_LENGTH = 8;

interface IProps {
  closeModal: () => void;
}

function SignUpModal({ closeModal }: IProps) {
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

  useEffect(() => {
    return () => {
      setValidateMode(false);
    };
  }, []);

  const [passwordFocused, setPasswordFocused] = useState(false);
  const isPasswordHasNameOrEmail = useMemo(() => {
    // password??? ???????????? ???????????? ??????????????? ??????
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
    // ???????????? ?????? ????????? ????????????
    if (password.length < PASSWORD_MIN_LENGTH) {
      return false;
    }

    return true;
  }, [password]);
  const isPasswordHasNumberOrSymbol = useMemo(() => {
    // ????????? ????????? ???????????????
    const regExp1 = /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
    const regExp2 = /[0-9]/g;

    if (!regExp1.test(password) || !regExp2.test(password)) {
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

  const validateSignUpForm = () => {
    if (!email || !lastname || !firstname || !password) {
      return false;
    }

    if (
      !isPasswordHasNameOrEmail ||
      !isPasswordOverMinLength ||
      !isPasswordHasNumberOrSymbol
    ) {
      return false;
    }

    if (!birthDay || !birthMonth || !birthYear) {
      return false;
    }

    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMode(true);

    if (validateSignUpForm()) {
      try {
        const body = {
          email,
          lastname,
          firstname,
          password,
          birthday: new Date(
            `${birthYear?.replace("???", "")}-${birthMonth?.replace(
              "???",
              ""
            )}-${birthDay?.replace("???", "")}`
          ).toISOString(),
        };

        const { data } = await signupAPI(body);
        dispatch(userActions.setLoggedUser(data));

        closeModal();
      } catch (error) {
        console.error(error);
      }
    }

    return null;
  };

  const onClickLoginButton = () => {
    dispatch(authActions.setAuthMode("SIGN_IN"));
  };

  return (
    <form css={signUpModalContainer} onSubmit={onSubmit}>
      <CloseXIcon css={modalCloseXIcon} onClick={closeModal} />
      <div css={inputWrapper}>
        <Input
          type="email"
          name="email"
          placeholder="????????? ??????"
          icon={<MailIcon />}
          value={email}
          onChange={onChangeEmail}
          useValidation
          isValid={!!email}
          errorMessage="???????????? ???????????????."
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="??????(???: ??????)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
          useValidation
          isValid={!!lastname}
          errorMessage="????????? ???????????????."
        />
      </div>
      <div css={inputWrapper}>
        <Input
          type="text"
          placeholder="???(???: ???)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
          useValidation
          isValid={!!firstname}
          errorMessage="?????? ???????????????."
        />
      </div>
      <div css={[inputWrapper, passwordWrapper]}>
        <Input
          type={hidePassword ? "password" : "text"}
          placeholder="???????????? ????????????"
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
          isValid={
            isPasswordHasNameOrEmail &&
            isPasswordOverMinLength &&
            isPasswordHasNumberOrSymbol
          }
          errorMessage="??????????????? ???????????????"
          onFocus={onFocusPassword}
        />
        {passwordFocused && (
          <>
            <PasswordWarning
              isValid={isPasswordHasNameOrEmail}
              text="??????????????? ?????? ???????????? ????????? ????????? ????????? ??? ????????????."
            />
            <PasswordWarning
              isValid={isPasswordOverMinLength}
              text="?????? 8???"
            />
            <PasswordWarning
              isValid={isPasswordHasNumberOrSymbol}
              text="????????? ????????? ???????????????."
            />
          </>
        )}
      </div>

      <p css={signUpBirthdatLabel}>??????</p>
      <p css={signUpModalBirthdayInfo}>
        ??? 18??? ????????? ????????? ???????????? ????????? ??? ????????????. ????????? ??????
        ??????????????? ??????????????? ???????????? ????????????.
      </p>
      <div css={signUpModalBirthdaySelectors}>
        <div css={signUpModalBirthdayMonthSelector}>
          <Selector
            options={monthList}
            disabledOption="???"
            defaultValue="???"
            onChange={onChangeBirthMonth}
            value={birthMonth}
            isValid={!!birthMonth}
          />
        </div>
        <div css={signUpModalBirthdayDaySelector}>
          <Selector
            options={dayList}
            disabledOption="???"
            defaultValue="???"
            onChange={onChangeBirthDay}
            value={birthDay}
            isValid={!!birthDay}
          />
        </div>
        <div css={signUpModalBirthdayYearSelector}>
          <Selector
            options={yearList}
            disabledOption="???"
            defaultValue="???"
            onChange={onChangeBirthYear}
            value={birthYear}
            isValid={!!birthYear}
          />
        </div>
      </div>
      <div css={signUpModalSubmitButtonWrapper}>
        <Button type="submit" color="bittersweet">?????? ??????</Button>
      </div>

      <p>
        ?????? ??????????????? ????????? ??????????
        <span css={signUpModalSetLogin} role="presentation" onClick={onClickLoginButton}>
          ?????????
        </span>
        `
      </p>
    </form>
  );
}

export default SignUpModal;
