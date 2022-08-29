import { RadioButtonProps } from "antd/lib/radio/radioButton";


export type TRadio = {
    className?: string;
    options: { value: string; disabled?: boolean; label: string }[];
  } & Partial<RadioButtonProps>;
  