import { Form } from 'antd'
import { DatePicker } from 'components/datepicker/DatePicker'
import { useController } from 'react-hook-form'
import { TFormDatePicker } from './form-datepicker.types'

export const FormDatePicker = <G extends string>({
  label,
  name,
  ...rest
}: TFormDatePicker<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <DatePicker {...{ ...field, ...rest }} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  )
}
