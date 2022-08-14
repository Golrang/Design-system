import { Dropdown } from "antd";
import { forwardRef, ReactNode } from "react";
import { DropdownButtonProps } from "antd/lib/dropdown";

export type TDropdownButton = {
  name: string;
  className?: string;
  label?: ReactNode;
} & Omit<DropdownButtonProps, "overlay">;

export const DropdownButton = forwardRef(
  ({ children, label, ...rest }: TDropdownButton, ref?: any) => (
    <Dropdown.Button {...rest} {...{ ref }} overlay={children as any}>
      {label}
    </Dropdown.Button>
  )
);
