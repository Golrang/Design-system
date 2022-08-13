import { forwardRef, Ref } from "react";
import { Checkbox as AntCheckBox, CheckboxProps } from "antd";

export const CheckBox = forwardRef(({ ...rest }: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    return (
        <AntCheckBox {...rest} ref={ref} />
    );
}
);