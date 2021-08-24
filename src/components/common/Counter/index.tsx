import { memo } from "react";
import CounterMinusIcon from "../../../../public/assets/counter_minus.svg";
import CounterPlusIcon from "../../../../public/assets/counter_plus.svg";
import {
  container,
  counterContents,
  counterDescription,
  counterLabel,
} from "./styles";

interface IProps {
  label?: string;
  description?: string;
  value: number;
  minValue: number;
  increaseNum: number;
  onChangeCount: (value: number) => () => void
}

function Counter({
  label,
  description,
  value = 1,
  minValue = 0,
  increaseNum = 1,
  onChangeCount,
}: IProps) {
  return (
    <div css={container}>
      <label css={counterLabel}>
        {label}
        {description && <span css={counterDescription}>{description}</span>}
      </label>
      <div css={counterContents}>
        <button
          type="button"
          disabled={value === minValue}
          onClick={onChangeCount(value - increaseNum)}
        >
          <CounterMinusIcon />
        </button>
        <p>{value}</p>
        <button type="button" onClick={onChangeCount(value + increaseNum)}>
          <CounterPlusIcon />
        </button>
      </div>
    </div>
  );
}

export default memo(Counter);
