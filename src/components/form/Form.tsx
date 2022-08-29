import { useForm, FormProvider } from 'react-hook-form'
import { Form as AntFrom } from 'antd'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import type { TForm } from './form.types'

const Provider = FormProvider as any

export const Form = <T extends Record<string, any>>({
  children,
  onSubmit,
  schema,
  ...rest
}: TForm<T>) => {
  const { control, handleSubmit } = useForm<T>({
    ...(schema && { resolver: yupResolver(schema) }),
  })

  return (
    <>
      <Provider {...{ control }}>
        <AntFrom {...rest} onFinish={handleSubmit(onSubmit)}>
          {children}
        </AntFrom>
      </Provider>
      <DevTool control={control} />
    </>
  )
}
