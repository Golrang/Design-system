import { Button } from 'components/button'
import { Error } from 'components/error'
import { useValidation } from 'hooks/use-validation'
import { ICDelete } from 'icons'
import { ComponentProps, memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'

type TFormSelect = {
  label?: string
  size?: 'small' | 'large' | 'default'
  validation?: Function
} & ComponentProps<'select'>

export const FormSelect = memo(
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
    const { control, setValue } = useFormContext()
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
                ' h-12',
                error
                  ? 'rounded border-2 border-red-400 shadow'
                  : 'rounded border border-light dark:border-dark',
                !value && 'text-gray-700'
              )}
              {...rest}
            >
              <option value="" selected disabled hidden>
                Select an option
              </option>
              {children}
            </select>
            <div className="flex items-center absolute top-0 right-0 mt-12 mr-8">
              {value && setValue && (
                <Button
                  type="button"
                  className="mr-1"
                  icon
                  onClick={(e) => {
                    e.stopPropagation()
                    if (setValue) {
                      setValue(name, '')
                    }
                  }}
                >
                  <ICDelete
                    role="delete"
                    className="w-4 h-4 text-red-500  z-30"
                  />
                </Button>
              )}
            </div>
            <Error error={error} className="absolute top-0 left-0 mt-[87px]" />
          </div>
        )}
      />
    )
  }
)
