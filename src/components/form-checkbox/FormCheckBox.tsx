import { CheckboxProps, Form } from "antd";
import { CheckBox } from "components/checkbox/CheckBox";
import { useController } from "react-hook-form";

type TFormCheckBox = {
  label: string;
  name: string;
} & Partial<CheckboxProps>;

export const FormCheckBox = ({
  label,
  name,
  ...rest
}: TFormCheckBox) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <CheckBox {...{ ...field, ...rest }} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};


