import { ReactNode } from "react";
import { DropdownButtonProps } from "antd/lib/dropdown";
export type TDropdownButton = {
  name: string;
  className?: string;
  label?: ReactNode;
} & Omit<DropdownButtonProps, "overlay">;
