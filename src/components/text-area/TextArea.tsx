import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type TTextarea<G> = Omit<ComponentProps<"textarea">, "size" | "ref" | "name"> & {
  label?: `${Capitalize<G & string>}`;
  name: G;
};

export const TextareaG = <G extends string>({
  label,
  name,
  ...rest
}: TTextarea<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <TextArea {...{ ...field }} {...rest} name={name} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
