import { Radio as AntRadio } from "antd";
import { forwardRef } from "react";
import { TRadio } from "./radio.types";



export const Radio = forwardRef(
  ({ options, ...rest }: TRadio, ref?: any) => (
    <AntRadio.Group {...rest} {...{ ref }}>
      {options.map((option, key) => (
        <AntRadio {...{ key }} {...option}>
          {option.label}
        </AntRadio>
      ))}
    </AntRadio.Group>
  )
);
