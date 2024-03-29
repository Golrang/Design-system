import { Input as AntInput } from 'antd'
import { ComponentProps, forwardRef } from 'react'

const { TextArea: AntTextArea } = AntInput

export const TextArea = forwardRef(
  ({ ...rest }: Omit<ComponentProps<'textarea'>, 'ref'>, ref?: any) => (
    <AntTextArea {...rest} {...{ ref }} />
  )
)
