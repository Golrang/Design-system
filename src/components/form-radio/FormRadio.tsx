import { Form } from "antd";
import { Radio } from "components/radio/Radio";

import { useController } from "react-hook-form";
import { TFormRadio } from "./form-radio.types";

export const FormRadio = <G extends string>({
  name,
  options,
  ...rest
}: TFormRadio) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <>
      <Form.Item name={name}>
        <Radio {...{ options, ...field, ...rest }}></Radio>
        {error && <p className="text-red-500">{error.message}</p>}
      </Form.Item>
    </>
  );
};
