import { ComponentProps, memo, useMemo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

export type TFormCheckBox = {
  label?: string
} & Omit<ComponentProps<'input'>, 'type' | 'id'>

export const FormCheckBox = memo(
  ({ label, name, disabled, ...rest }: TFormCheckBox): JSX.Element => {
    const id = useMemo(() => uuid(), [])
    const { control } = useFormContext()

    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="flex items-center space-x-4">
            <input
              id={id}
              data-testid="check-core"
              type="checkbox"
              className="w-5 h-5 checked:bg-indigo-600"
              checked={value}
              onChange={(e) => !disabled && onChange(e.target.checked)}
              {...rest}
            />

            {label && (
              <label className="text-light dark:text-dark" htmlFor={id}>
                {label}
              </label>
            )}
          </div>
        )}
      />
    )
  }
)
