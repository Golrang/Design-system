import { ComponentProps, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useValidation } from 'hooks/use-validation'
import { classNames } from 'utils/classes'

type TFormTextArea = {
  name: string
  label?: string
  size?: 'small' | 'large' | 'default'
  expanded?: boolean
  max?: number
  min?: number
} & Omit<ComponentProps<'textarea'>, 'onChange'>

export const TextArea = memo(
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
    const { validate } = useValidation({ required, max, min })

    return (
      <Controller
        name={name}
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
                  ' mb-2 text-light dark:text-dark',
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
                'px-4 pt-2.5',
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
          </div>
        )}
      />
    )
  }
)
