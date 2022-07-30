import { Radio } from "antd";
import { ComponentProps, ReactNode } from "react";

type TRadio<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name"> & {
  valueitem?: [
    {
      value: any;
      title?: string | ReactNode;
      disabled?: boolean;
    }
  ];
};

export const RadioG = <G extends string>({ valueitem, ...rest }: TRadio<G>) => {
  return (
    <>
      {valueitem &&
        valueitem.map((item, index) => {
        //   <Radio value={item.value}  {...rest}>{item.title}</Radio>;
          <Radio value={item.value} disabled={item.disabled}>{item.title}</Radio>;
        })}
    </>
  );
};
