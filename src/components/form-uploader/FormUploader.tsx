import { Form } from 'antd'
import { useController } from 'react-hook-form'

import type { TFormUploader } from './form-uploader.types'
import { Uploader } from '../uploader'

export const FormUploader = ({
  label,
  name,
  children,
  ...rest
}: TFormUploader) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name })
  return (
    <Form.Item label={label} name={name}>
      <Uploader {...{ ...field, ...rest }}>{children}</Uploader>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  )
}
