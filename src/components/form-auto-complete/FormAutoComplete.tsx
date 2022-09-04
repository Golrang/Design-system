import { Form } from "antd";
import { useController } from "react-hook-form";

import { AutoComplete } from "components/auto-complete";
import type { TFormAutoComplete } from "./form-auto-complete.types";

export const FormAutoComplete = <G extends string>({
  label,
  name,
  ...rest
}: TFormAutoComplete<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <AutoComplete {...{ ...field, ...rest }} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
