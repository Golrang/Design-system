import { ComponentProps, memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type TFormControl = {
  defaultValues?: any
  onSubmit: (state: any) => void
} & Omit<ComponentProps<'form'>, 'onSubmit'>

const Provider = FormProvider as any

export const Form = memo(
  ({ children, onSubmit, defaultValues, ...rest }: TFormControl) => {
    const { control, handleSubmit, setValue, setError } = useForm({
      defaultValues,
    })

    return (
      <Provider control={control} setValue={setValue} setError={setError}>
        <form onSubmit={handleSubmit(onSubmit)} {...rest}>
          {children}
        </form>
      </Provider>
    )
  }
)
