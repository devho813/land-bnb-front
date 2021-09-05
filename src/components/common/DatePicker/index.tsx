import { SyntheticEvent } from "react";
import ReactDatePicker from "react-datepicker";
import { container } from "./styles";

interface IProps {
  onChange: (
    date: Date | [Date | null, Date | null] | null,
    event: SyntheticEvent<any, Event> | undefined
  ) => void;
}

function DatePicker({ onChange, ...props }: IProps) {
  return (
    <div css={container}>
      <ReactDatePicker
        disabledKeyboardNavigation
        {...props}
        onChange={onChange}
      />
    </div>
  );
}

export default DatePicker;
