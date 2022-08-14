import { Dropdown, Form, Menu as AntMenu } from "antd";
import { ButtonGroupProps } from "antd/lib/button";
import { DropdownButtonProps } from "antd/lib/dropdown";
import { RadioButtonProps } from "antd/lib/radio/radioButton";
import { DropdownButton } from "components/dropdownbutton/DropdownButton";
import { Radio } from "components/radio/Radio";

import { useController } from "react-hook-form";

export type TFormDropdownButton = {
  name: string;
  className?: string;
  options: { key: number; label: string }[];
} & Partial<DropdownButtonProps>;

export const FormDropdownButton = <G extends string>({
  className,
  name,
  options,
  ...rest
}: TFormDropdownButton) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <>
      <Form.Item name={name}>
        <DropdownButton {...{ options, ...field, ...rest }}></DropdownButton>
        {error && <p className="text-red-500">{error.message}</p>}
      </Form.Item>
    </>
  );
};
