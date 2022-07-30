import { Select as AntSelect, Form } from "antd";
import { useController } from "react-hook-form";

const { Option } = AntSelect;

type TSelect = {
  label: string;
  name: string;
  options: { value: string; disabled?: boolean; label: string }[];
};

export const Select = ({ label, name, options, ...rest }: TSelect) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <AntSelect {...{ ...field }} {...rest}>
        {options?.map((option) => (
          <Option {...option}>{option.label}</Option>
        ))}
      </AntSelect>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
