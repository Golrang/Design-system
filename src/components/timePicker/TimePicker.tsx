import { TimePicker as AntTimePicker } from "antd";
import { TTimePicker } from "./timePicker.types";

export const TimePicker = ({
  onChange,
  value = null,
  ...rest
}: TTimePicker) => (
  <AntTimePicker
    {...rest}
    onChange={(_: any, value: string) => onChange?.(value)}
  />
);
