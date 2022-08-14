import { Form } from "antd";

import { DropdownButton } from "components/dropdownbutton/DropdownButton";

import { useController } from "react-hook-form";

export type TFormDropdownButton<G> = {
  name: G;
  className?: string;
  options: { key: number; label: string }[];
  children?: React.ReactNode;
};

import { Menu as AntMenu } from "antd";

export const FormDropdownButton = <G extends string>({
  className,
  name,
  options,
  children,
  ...rest
}: TFormDropdownButton<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <Form.Item name={name}>
      <DropdownButton {...{ options, ...field, ...rest }} label={children}>
        <AntMenu
          onClick={(e) => field.onChange?.(e.key as any)}
          items={options}
        />
      </DropdownButton>
      {error && <p className="text-red-500">{error.message}</p>}
    </Form.Item>
  );
};
