import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'

type TFormSwitch = {
  className?: string
  label?: string
  name?: string
  size?: 'small' | 'large'
  disabled?: boolean
}

export const FormSwitch = memo((props: TFormSwitch) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div
          className={classNames(
            'flex items-center overflow-hidden',
            props.className,
            props.size === 'small' ? 'h-12' : 'h-20'
          )}
        >
          <div className="row-between mr-4">
            <div
              className={classNames(
                'flex items-center justify-between  rounded-full  px-1 border border-indigo-600 ',
                value ? 'bg-indigo-400 ' : 'bg-gray-400 ',
                props.disabled ? ' cursor-default' : 'cursor-pointer',
                props.size === 'small' ? 'h-7 w-14' : 'h-8 w-16'
              )}
              onClick={() => {
                if (!props.disabled && onChange) {
                  onChange(!value)
                }
              }}
            >
              {value && <div />}

              <div
                className={classNames(
                  ' rounded-full border   ',
                  value
                    ? 'bg-secondary border-indigo-700 '
                    : 'bg-gray-600 border-gray-700',
                  props.size === 'small' ? 'w-5 h-5' : 'w-6 h-6'
                )}
              />
              {!value && <div />}
            </div>
          </div>
          <span
            className={classNames(
              'text-light dark:text-dark',
              props.size === 'small' ? 'text-[11px]' : ' text-sm lg:text-base'
            )}
          >
            {props.label}
          </span>
        </div>
      )}
    />
  )
})
