import { Input as AntInput } from "antd";
import { forwardRef } from "react";
import type { InputProps } from "antd";

export const Input = forwardRef(
  ({ children, ...rest }: InputProps, ref?: any) => (
    <AntInput {...rest} {...{ ref }} />
  )
);
