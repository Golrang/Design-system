import { Form } from "antd";
import type { UploadProps } from "antd";
import { useController } from "react-hook-form";

import { Uploader } from "../uploader";

type TFormUploader = {
  label?: string;
  name: string;
} & Partial<UploadProps>;

export const FormUploader = ({
  label,
  name,
  children,
  ...rest
}: TFormUploader) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <Uploader {...{ ...field, ...rest }}>
        {children}
      </Uploader>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
