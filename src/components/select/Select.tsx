import { forwardRef } from "react";
import { Select as AntSelect, SelectProps } from "antd";
const { Option } = AntSelect;

export const Select = forwardRef(
  ({ options, ...rest }: SelectProps, ref?: any) => (
    <AntSelect {...rest} {...{ ref }}>
      {options?.map((option, key) => (
        <Option {...option} {...{ key }}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  )
);
