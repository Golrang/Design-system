import { Select, Form } from "antd";
import { useController } from "react-hook-form";

const { Option } = Select;

type TSelect = {
  label: string;
  name: string;
  options: { value: string; disabled?: boolean; label: string }[];
};

export const SelectElement = ({ label, name, options, ...rest }: TSelect) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  return (
    <Form.Item label={label} name={name}>
      <Select {...{ ...field }} {...rest}>
        {options?.map((option) => (
          <Option {...option}>{option.label}</Option>
        ))}
      </Select>
      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
