import { Error } from 'components/error'
import { useValidation } from 'hooks/use-validation'
import { ComponentProps, memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'

type TFormInput = {
  label?: string
  size?: 'small' | 'large' | 'default'
  precent?: boolean
  number?: boolean
  later?: boolean
  validation?: Function
  hours?: boolean
} & ComponentProps<'input'>

export const FormInput = memo(
  ({
    label,
    className,
    name,
    size,
    required,
    max,
    min,
    precent,
    number,
    later,
    validation,
    hours,
    type,
    ...rest
  }: TFormInput) => {
    const { control } = useFormContext()
    const { validate } = useValidation({
      required,
      max,
      min,
      precent,
      number,
      later,
      validation,
      hours,
    })

    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <div className={classNames('w-full col-start relative', className)}>
            {label && (
              <label
                className={classNames(
                  ' mb-2 text-light dark:text-dark',
                  size === 'small' ? 'text-xs' : 'text-base'
                )}
              >
                {label}
              </label>
            )}
            <input
              data-testid="input-core"
              ref={ref}
              value={value || ''}
              onChange={onChange}
              type={type || 'text'}
              className={classNames(
                'px-4',
                error
                  ? 'border-2 border-red-400 shadow'
                  : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600',
                size === 'large'
                  ? 'h-14 '
                  : size === 'small'
                  ? 'h-8 text-[13px]'
                  : 'h-12'
              )}
              {...rest}
            />
            <Error
              error={error}
              className={classNames(
                'absolute left-0',
                label ? ' top-[78px]' : 'top-[45px]'
              )}
            />
          </div>
        )}
      />
    )
  }
)
