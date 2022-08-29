import { Form } from 'antd'
import { CheckBox } from 'components/checkbox/CheckBox'
import { useController } from 'react-hook-form'
import { TFormCheckBox } from './form-checkbox.types'

export const FormCheckBox = <G extends string>({
  label,
  name,
  ...rest
}: TFormCheckBox<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <CheckBox {...{ ...field, ...rest }} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  )
}
