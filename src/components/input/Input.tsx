import { Input as AntInput, Form } from "antd";
import { ComponentProps } from "react";
import { useController } from "react-hook-form";

type TInput<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name"> & {
  label?: string;
  name: G;
};

export const Input = <G extends string>({
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
      <AntInput {...{ ...field }} {...rest} />
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
