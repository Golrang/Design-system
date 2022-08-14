import { Button as AntButton } from "antd";
import { TFormButton } from "components/form-button/FormButton";
import { forwardRef } from "react";

export const Button = forwardRef(
  ({ children, ...rest }: TFormButton, ref?: any) => (
    <>
      <AntButton {...rest} {...{ ref }}>
        {children}
      </AntButton>
    </>
  )
);
