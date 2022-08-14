import { Radio as AntRadio } from "antd";
import { RadioButtonProps } from "antd/lib/radio/radioButton";
import { forwardRef } from "react";



export type TRadio = {
  className?: string;
  options: { value: string; disabled?: boolean; label: string }[];
} & Partial<RadioButtonProps>;


export const Radio = forwardRef(
  ({ options, ...rest }: TRadio, ref?: any) => (
    <AntRadio.Group {...rest} {...{ ref }}>
      {options.map((option, key) => (
        <AntRadio {...{ key }} {...option}>
          {option.label}
        </AntRadio>
      ))}
    </AntRadio.Group>
  )
);
