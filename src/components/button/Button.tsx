import { Button as AntButton, ButtonProps } from 'antd'
// import { TFormButton } from "components/form-button/FormButton";
import { forwardRef } from 'react'

export type TButton = {
  className?: string
} & Partial<ButtonProps>

export const Button = forwardRef(
  ({ children, ...rest }: TButton, ref?: any) => (
    <AntButton {...rest} {...{ ref }}>
      {children}
    </AntButton>
  )
)
