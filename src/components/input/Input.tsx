import { Input, Form } from "antd";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type TInput<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name"> & {
  label?: `${Capitalize<G & string>}`;
  name: G;
};

export const InputG = <G extends string>({
  label,
  name,
  ...rest
}: TInput<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <Input {...{ ...field }} {...rest} name={name} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
