import { ComponentProps, memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { Error } from 'components/error'
import { classNames } from 'utils/classes'

type TFormTextArea = {
  label?: string
  size?: 'small' | 'large' | 'default'
  expanded?: boolean
  max?: number
  min?: number
} & Omit<ComponentProps<'textarea'>, 'onChange'>

export const FormTextArea = memo(
  ({
    label,
    size,
    expanded,
    max,
    min,
    required,
    name,
    className,
    ...rest
  }: TFormTextArea) => {
    const { control } = useFormContext()
    const { validate } = useValidation({ required, max, min })

    return (
      <Controller
        name={name}
        control={control}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <div
            className={classNames(
              'w-full col-start resize-y relative',
              className
            )}
          >
            {label && (
              <label
                className={classNames(
                  ' mb-2 text-gray-800 dark:text-gray-300',
                  size === 'small' ? 'text-xs' : 'text-base'
                )}
              >
                {label}
              </label>
            )}
            <textarea
              value={value || ''}
              ref={ref}
              onChange={(e) => onChange(e.target.value)}
              className={classNames(
                error
                  ? 'border-2 border-red-400'
                  : 'border border-gray-300 focus:ring-2  focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600 dark:focus:ring-2',
                size === 'large'
                  ? 'h-14 '
                  : size === 'small'
                  ? 'h-8 text-[13px] min-h-[1.6rem] py-1'
                  : expanded
                  ? 'h-32 min-h-[3rem] pt-2.5'
                  : 'h-12 min-h-[3rem] pt-2.5'
              )}
              {...rest}
            />
            <Error
              error={error}
              className={classNames(
                'absolute  left-0',
                expanded ? 'top-[155px]' : 'top-[75px]'
              )}
            />
          </div>
        )}
      />
    )
  }
)
