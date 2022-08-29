import { forwardRef, Ref } from 'react'
import { Checkbox as AntCheckBox } from 'antd'
import { TCheckBox } from './checkbox.types'

export const CheckBox = forwardRef(
  ({ ...rest }: TCheckBox, ref: Ref<HTMLInputElement>) => {
    return <AntCheckBox {...rest} ref={ref} />
  }
)
