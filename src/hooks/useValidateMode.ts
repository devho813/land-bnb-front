import { useDispatch } from "react-redux";
import { useSelector } from "../store";
import { commonActions } from "../store/common";

function useValidateMode() {
  const dispatch = useDispatch();
  const validateMode = useSelector((state) => state.common.validateMode);

  const setValidateMode = (payload: boolean) => {
    dispatch(commonActions.setValidationMode(payload));
  };

  return { validateMode, setValidateMode };
}

export default useValidateMode;
