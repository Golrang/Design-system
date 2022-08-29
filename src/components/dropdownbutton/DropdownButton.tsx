import { Dropdown } from "antd";
import { forwardRef} from "react";
import { TDropdownButton } from "./dropdownButton.types";



export const DropdownButton = forwardRef(
  ({ children, label, ...rest }: TDropdownButton, ref?: any) => (
    <Dropdown.Button {...rest} {...{ ref }} overlay={children as any}>
      {label}
    </Dropdown.Button>
  )
);
