import { ComponentProps, memo, FormEvent } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TFormControl = {
  defaultValues?: any
  onSubmit: SubmitHandler<FormEvent<HTMLFormElement>>
} & ComponentProps<'form'>

export const Form = memo(
  ({ children, onSubmit, defaultValues, ...rest }: TFormControl) => {
    const { control, handleSubmit, setValue } = useForm({ defaultValues })

    return (
      <FormProvider control={control} setValue={setValue}>
        <form onSubmit={handleSubmit(onSubmit)} {...rest}>
          {children}
        </form>
      </FormProvider>
    )
  }
)
