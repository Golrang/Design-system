import { Radio, Form, Space } from "antd";
import { ComponentProps, ReactNode } from "react";
import { useController } from "react-hook-form";
import { RadioG } from "./Radio";
import { RadioButtonG } from "./RadioButton";

type TRadioGroup<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name"> & {
  name: G;
  size?: "small" | "large";
  optionType?: "button";
  options?: Array<{
    value: any;
    label?: string;
    disabled?: boolean;
  }>;
};

export const RadioGroupG = <G extends string>({
  name,
  size,
  optionType,
  options,
  ...rest
}: TRadioGroup<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item name={name}>
      <Radio.Group 
        {...{ ...field }}
        name={name}
        size={size}
        options={options}
        optionType={optionType}
        {...rest}
        
      ></Radio.Group>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
