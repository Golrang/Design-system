import { TimePicker as AntTimePicker } from "antd";
import { TTimePicker } from "./timePicker.types";


export const TimePicker = ({ ...rest }: TTimePicker) => (
  <AntTimePicker {...rest} />
);
