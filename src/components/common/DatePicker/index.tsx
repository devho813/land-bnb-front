import { addHours } from "date-fns";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import { container } from "./styles";

function DatePicker({ onChange, ...props }: ReactDatePickerProps<any>) {
  return (
    <div css={container}>
      <ReactDatePicker
        disabledKeyboardNavigation
        {...props}
        onChange={(date, event) => {
          if (date) {
            onChange(addHours(date as Date, 9), event);
          } else {
            onChange(null, event);
          }
        }}
        dateFormat="MM월 dd일"
      />
    </div>
  );
}

export default DatePicker;
