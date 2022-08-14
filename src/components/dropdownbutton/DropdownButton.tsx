import { Menu as AntMenu, Dropdown } from "antd";
import { TFormDropdownButton } from "components/form-dropdownbutton/FormDropdownButton";
import { forwardRef } from "react";

export const DropdownButton = forwardRef(
  ({ children, options, ...rest }: TFormDropdownButton, ref?: any) => (
    <>
      <Dropdown.Button
        {...rest}
        {...{ ref }}
        overlay={
          <AntMenu
            // onClick={drowpdownOnClick}
            items={options}
          />
        }
      >
        {children}
      </Dropdown.Button>
    </>
  )
);
