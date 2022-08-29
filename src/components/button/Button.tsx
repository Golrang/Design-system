import { Button as AntButton } from "antd";
import { forwardRef } from "react";
import { TButton } from "./button.types";


export const Button = forwardRef(
  ({ children, ...rest }: TButton, ref?: any) => (
    <AntButton {...rest} {...{ ref }}>
      {children}
    </AntButton>
  )
);
