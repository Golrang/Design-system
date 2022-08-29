import { forwardRef } from 'react'
import { Select as AntSelect } from 'antd'
import { TSelect } from './select.types'

export const Select = forwardRef(({ ...rest }: TSelect, ref?: any) => (
  <AntSelect {...rest} {...{ ref }} />
))
