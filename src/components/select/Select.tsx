import { TFormSelect } from "components/form-select/FormSelect";
import { forwardRef } from "react";
import { Select as AntSelect } from "antd";
const { Option } = AntSelect;

export const Select = forwardRef(
  ({ options, ...rest }: TFormSelect, ref?: any) => (
    <AntSelect {...rest} {...{ ref }}>
      {options?.map((option, key) => (
        <Option {...option} {...{ key }}>
          {option.label}
        </Option>
      ))}
    </AntSelect>
  )
);
