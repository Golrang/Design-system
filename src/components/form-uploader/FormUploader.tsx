import { Form } from "antd";
import type { UploadProps } from "antd";
import { useController } from "react-hook-form";

import { Uploader } from "components/uploader";
import { UploadIcon } from "components/icons";

type TFormUploader = {
  label?: string;
  name: string;
} & Partial<UploadProps>;

export const FormUploader = ({ label, name, ...rest }: TFormUploader) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name} >
      <Uploader {...{ ...field, ...rest }}>
        <button>
          <span>upload a file</span>
          <UploadIcon className="ml-2 w-4 inline" />
        </button>
      </Uploader>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
