import { useSelector } from "../../store";
import SignUpModal from "../SignUpModal";

interface IProps {
  closeModal: () => void;
}

function AuthModal({ closeModal }: IProps) {
  const authMode = useSelector((state) => state.auth.authMode);

  return (
    <>
      {authMode === "SIGN_IN" && <div>로그인</div>}
      {authMode === "SIGN_UP" && <SignUpModal closeModal={closeModal} />}
    </>
  );
}

export default AuthModal;
