import { TimePickerProps } from "antd";

export type TTimePicker = Omit<TimePickerProps, "ref" | "onChange"> & {
  onChange: (value: string) => void;
};
