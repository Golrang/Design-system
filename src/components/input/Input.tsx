import { Input as AntInput } from 'antd'
import { forwardRef } from 'react'
import type { InputProps } from 'antd'

export const Input = forwardRef(({ ...rest }: InputProps, ref?: any) => (
  <AntInput {...rest} {...{ ref }} />
))
