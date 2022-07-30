import { Form, Checkbox } from 'antd';
import { ComponentProps } from 'react'
import { useController } from 'react-hook-form';

type TCheckBox<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name" | "onChange"> & {
    label: string;
    name: G;
}

export const CheckBox = <G extends string>({
    label,
    name,
    ...rest
}: TCheckBox<G>) => {
    const { field, fieldState: { error }, } = useController({ name });
    return (
        <Form.Item label={label} name={name}>
            <Checkbox {...{ ...field }} {...rest} name={name} />
            {error && <div className="text-red-500">{error.message}</div>}
        </Form.Item>
    );
};
