import { useValidation } from 'hooks/use-validation'
import { memo, useMemo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import { classNames } from 'utils'
import { Error } from 'components/error'
import DatePickerReact from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type TFormDatePicker = {
  className?: string
  label?: string
  name?: any
  later?: boolean
  required?: boolean
  validation?: any
  year?: boolean
  defaultValue?: string
  time?: boolean
  onChange?: any
  error?: any
  value?: any
  id?: any
}

const datePickerBoxClassName = (error) =>
  classNames(
    ' w-full row-between focus:outline-none overflow-hidden cursor-pointer  rounded  text-gray-900  h-12  px-4 absolute top-8 right-0 z-0 bg-white dark:bg-gray-400',
    error
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 dark:border-gray-700'
  )

const datePickerBoxValue = (value, time, defaultValue) =>
  value
    ? time
      ? value.slice(0, 15)
      : value.slice(0, 10)
    : defaultValue
    ? defaultValue
    : 'YYYY-MM-DD'

export const FormDatePicker = memo(
  ({
    name,
    className,
    required,
    later,
    validation,
    label,
    year,
    defaultValue,
    time,
  }: TFormDatePicker) => {
    const { validate } = useValidation({
      required,
      later,
      validation,
    })
    const { control } = useFormContext()

    const id = useMemo(() => uuid(), [])

    return (
      <Controller
        control={control}
        name={name}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className={classNames('w-full col-start relative', className)}>
            {label && (
              <label className=" mb-2 text-light dark:text-dark">{label}</label>
            )}
            <Error error={error} className=" absolute left-0 top-20 mt-1" />
            <DatePickerReact
              id={id}
              closeOnScroll={true}
              placeholderText="Click here"
              dateFormat="yyyy/MM/dd"
              showYearPicker={year}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className=" z-50 opacity-0"
              showTimeSelect={time}
              onChange={(date) => onChange(moment(date).format().slice(0, 10))}
            />
            <label
              htmlFor={id}
              className={datePickerBoxClassName(error)}
              data-testid="date-picker-box"
            >
              {datePickerBoxValue(value, time, defaultValue)}
            </label>
          </div>
        )}
      />
    )
  }
)
