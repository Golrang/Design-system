import { Form } from 'antd'
import { Input } from 'components/input/Input'
import { useController } from 'react-hook-form'
import { TFormInput } from './form-input.types'

export const FormInput = <G extends string>({
  label,
  name,
  ...rest
}: TFormInput<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <Input {...{ ...field }} {...rest} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  )
}
