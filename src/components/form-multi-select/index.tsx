import { Button } from 'components/button'
import { Check } from 'components/check'
import { Error } from 'components/error'
import { useToggle } from 'hooks/use-toggle'
import { useValidation } from 'hooks/use-validation'
import { ICChevronDown, ICChevronUp, ICDelete } from 'icons'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { classNames } from 'utils'

type TFormMultiSelect = {
  className?: string
  label?: string
  name?: string
  id?: string
  children?: any
  required?: boolean
  options: { id: string | number; title: string | number; disabled?: boolean }[]
}

const handleChange = ({ option, onChange, value }) => {
  const existed =
    value === null
      ? false
      : value !== undefined &&
        value.length &&
        value.some((item) => item == option.id)
  const payload =
    value === null
      ? [option.id]
      : value !== undefined
      ? existed
        ? [...value.filter((item) => item != option.id)]
        : [...value, option.id]
      : [value]
  onChange(payload)
}

export const FormMultiSelect = memo((props: TFormMultiSelect) => {
  const { open, toggle } = useToggle()
  const { control, setValue } = useFormContext()
  const { validate } = useValidation({ required: props.required })

  return (
    <div className={classNames('w-full col-start', props.className)}>
      <Controller
        name={props.name}
        control={control}
        rules={{ validate }}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => (
          <div className="w-full flex-col relative space-y-2">
            {props.label && (
              <label className="mb-2 text-light dark:text-dark">
                {props.label}
              </label>
            )}
            <div
              onClick={() => toggle()}
              className={classNames(
                'w-full row-between focus:outline-none overflow-hidden cursor-pointer  bg-white dark:bg-gray-400 ',
                open
                  ? 'rounded-t border-t-2 border-r-2 border-l-2 border-indigo-400'
                  : error
                  ? 'rounded border-2 border-red-400 shadow'
                  : 'rounded border border-light dark:border-dark',
                value ? 'min-h-[3rem]  py-2 pl-2 ' : 'h-12  pl-4'
              )}
            >
              {Array.isArray(value) ? (
                <div
                  className={classNames(
                    'w-10/12 flex-row justify-start items-center ',
                    open && 'opacity-30'
                  )}
                >
                  {(value || []).map((val, index) => (
                    <span className="text-gray-900" key={index}>
                      {val}
                      {value.length - 1 === index ? ' ' : ' , '}
                    </span>
                  ))}
                </div>
              ) : (
                <div />
              )}

              <div className=" flex items-center ">
                {value && !open && value.length > 0 && (
                  <Button
                    type="button"
                    className="mr-2"
                    icon
                    onClick={(e) => {
                      e.stopPropagation()

                      setValue(props.name, '')
                    }}
                  >
                    <ICDelete
                      role="delete"
                      className="w-4 h-4 text-red-500  z-30"
                    />
                  </Button>
                )}
                <Button icon type="button" className="mr-[12px]">
                  {open ? (
                    <ICChevronUp
                      className="w-[13px] h-[13px] text-gray-600"
                      role="arrow-down"
                    />
                  ) : (
                    <ICChevronDown
                      className="w-[13px] h-[13px] text-gray-600"
                      role="arrow-down"
                    />
                  )}
                </Button>
              </div>
            </div>
            {open && (
              <div
                className={classNames(
                  'w-full col-start min-h-[3rem] max-h-60 overflow-y-auto rounded-b px-4  z-50 pt-18px absolute top-1px border-r-2 border-b-2 border-l-2  border-indigo-400 bg-white dark:bg-gray-400'
                )}
                ref={ref}
                slot="wrapper"
              >
                {props.options.map((option) => (
                  <div
                    key={option.id}
                    slot="wrapper"
                    className={classNames(
                      'w-full row-start z-40',
                      option.disabled
                        ? 'cursor-not-allowed opacity-50'
                        : 'cursor-pointer'
                    )}
                    onClick={(e) => {
                      if (!option.disabled) {
                        e.stopPropagation()
                        handleChange({ option, value, onChange })
                      }
                    }}
                  >
                    <Check
                      checked={value && value.includes(option.id)}
                      className="mr-3"
                    />
                    <span
                      slot="child"
                      className={classNames(
                        'w-full flex items-center py-2 hover:text-indigo-700',
                        value && value.includes(option.id)
                          ? 'text-indigo-700 font-semibold'
                          : 'text-gray-500 dark:text-gray-700'
                      )}
                    >
                      {option.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
            <Error error={error} className="absolute top-[76px] left-0" />
          </div>
        )}
      />

      {open && (
        <div
          className="opacity-0 fixed inset-0 z-20 "
          onClick={() => toggle()}
        />
      )}
    </div>
  )
})
