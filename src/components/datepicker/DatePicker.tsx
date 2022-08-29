import { DatePicker as AntDatePicker } from 'antd'
import { forwardRef } from 'react'
import { TDatePicker } from './datepicker.types'

export const DatePicker = forwardRef(({ ...rest }: TDatePicker, ref: any) => {
  return <AntDatePicker {...rest} ref={ref} />
})
