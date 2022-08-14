import { Input as AntInput, Form } from "antd";
import { useController } from "react-hook-form";
import { TFormInput } from "./form-input.types";

export const FormInput = <G extends string>({
  label,
  name,
  ...rest
}: TFormInput<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <AntInput {...{ ...field }} {...rest} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
