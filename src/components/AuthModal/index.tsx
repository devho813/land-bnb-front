import { useSelector } from "../../store";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";

interface IProps {
  closeModal: () => void;
}

function AuthModal({ closeModal }: IProps) {
  const authMode = useSelector((state) => state.auth.authMode);

  return (
    <>
      {authMode === "SIGN_IN" && <LoginModal closeModal={closeModal} />}
      {authMode === "SIGN_UP" && <SignUpModal closeModal={closeModal} />}
    </>
  );
}

export default AuthModal;
