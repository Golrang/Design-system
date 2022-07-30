import { Button, Dropdown, Form, Menu, Tooltip } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { MenuProps } from "rc-menu";
import { ComponentProps, useState } from "react";
import { useController } from "react-hook-form";

type TButton<G> = Omit<
  ComponentProps<"input">,
  "size" | "ref" | "name" | "type"
> & {
  name: G;
  size?: "small" | "middle" | "large";
  type?: "primary" | "dashed" | "link" | "text";
  titleTooltiP?: string;
  icon?: React.ForwardRefExoticComponent<any>;
  shape?: "circle" | "round" | "default";
  htmlType?: "submit" | "reset" | "button";
  isDropDownButton?: boolean;
  drowpdownItems?: ItemType[] | undefined;
  drowpdownOnClick?: MenuProps["onClick"] | undefined;
};

export const ButtonG = <G extends string>({
  name,
  size,
  type,
  children,
  titleTooltiP,
  icon,
  shape,
  htmlType,
  isDropDownButton,
  drowpdownItems,
  drowpdownOnClick,
  ...rest
}: TButton<G>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });
  const menu = <Menu onClick={drowpdownOnClick} items={drowpdownItems} />;
  return (
    <Form.Item name={name}>
      {titleTooltiP ? (
        <Tooltip title={titleTooltiP}>
          <Button
            {...{ ...field }}
            type={type}
            icon={icon}
            shape={shape}
            htmlType={htmlType}
            {...rest}
          >
            {children}
          </Button>
        </Tooltip>
      ) : isDropDownButton ? (
        <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
      ) : (
        <Button
          {...{ ...field }}
          type={type}
          icon={icon}
          shape={shape}
          htmlType={htmlType}
          {...rest}
        >
          {children}
        </Button>
      )}

      {error && <div className="text-red-500">{error.message}</div>}
    </Form.Item>
  );
};
