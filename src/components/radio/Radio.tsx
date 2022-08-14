import { Radio as AntRadio } from "antd";
import { TFormRadio } from "components/form-radio/FormRadio";
import { forwardRef } from "react";

export const Radio = forwardRef(
  ({ options, ...rest }: TFormRadio, ref?: any) => (
    <>
      <AntRadio.Group {...rest} {...{ ref }}>
        {options.map((option, key) => (
          <AntRadio {...{ key }} {...option}>
            {option.label}
          </AntRadio>
        ))}
      </AntRadio.Group>
    </>
  )
);
