import { ComponentProps } from 'react';
import { Select, Form, SelectProps } from "antd";
import { useController } from 'react-hook-form';

type TSelect<G> = Omit<ComponentProps<"select">, "size" | "ref" | "name"> & {
    label: string;
    name: G,
}

type TSelectAnt = React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLInputElement>> & {
    label: string
}


export const SelectElement = <G extends string>({
    label,
    name,
    ...rest
}: TSelectAnt) => {
    const { field, fieldState: { error }, } = useController({ name });
    return (
        <Form.Item label={label} name={name}>
            <Select {...{ ...field }} {...rest} />
            {error && <div className="text-red-500">{error.message}</div>}
        </Form.Item>
    )
}
