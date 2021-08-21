import { useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
import { authActions } from "../../store/auth";
import AuthModal from "../AuthModal";
import { loginButton, signUpButton } from "./styles";

function HeaderAuth() {
  const { openModal, closeModal, ModalPortal } = useModal();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          type="button"
          css={signUpButton}
          onClick={() => {
            dispatch(authActions.setAuthMode("SIGN_UP"));
            openModal();
          }}
        >
          회원가입
        </button>
        <button
          type="button"
          css={loginButton}
          onClick={() => {
            dispatch(authActions.setAuthMode("SIGN_IN"));
            openModal();
          }}
        >
          로그인
        </button>
      </div>

      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
}

export default HeaderAuth;
