import { useValidation } from 'hooks/use-validation'

import { ComponentProps, memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'

type TFormSelect = {
  name: string
  label?: string
  size?: 'small' | 'large' | 'default'
  validation?: Function
} & ComponentProps<'select'>

export const Select = memo(
  ({
    label,
    children,
    className,
    name,
    size,
    required,
    validation,
    ...rest
  }: TFormSelect) => {
    const { control } = useFormContext()
    const { validate } = useValidation({ required, validation })

    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <div className={classNames('relative w-full col-start', className)}>
            {label && (
              <label
                className={classNames(' mb-2 text-light dark:text-dark')}
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <select
              id={name}
              ref={ref}
              defaultValue={value || ''}
              onChange={onChange}
              className={classNames(
                ' h-12 px-4',
                error
                  ? 'border-2 border-red-400 shadow'
                  : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600',
                !value && 'text-gray-700'
              )}
              {...rest}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              {children}
            </select>
          </div>
        )}
      />
    )
  }
)
