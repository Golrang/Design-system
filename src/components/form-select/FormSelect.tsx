import { Form, SelectProps } from "antd";
import { Select } from "components/select/Select";

import { useController } from "react-hook-form";

export type TFormSelect = {
  label?: string;
  name: string;
  options: { value: string; disabled?: boolean; label: string }[];
} & Partial<SelectProps>;

export const FormSelect = ({ label, name, options, ...rest }: TFormSelect) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <Select {...{ options, ...field, ...rest }} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
