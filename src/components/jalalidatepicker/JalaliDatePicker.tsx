import { DatePicker as AntJalaliDatePicker } from 'antd-jalali';
import { forwardRef } from 'react';
import { TJalaliDatePicker } from './jalalidatepicker.types';

export const JalaliDatePicker = forwardRef(({ ...rest }: TJalaliDatePicker, ref: any) => {
    return (
        <AntJalaliDatePicker {...rest} {...{ ref }} />
    )
})
