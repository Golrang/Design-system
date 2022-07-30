import { Radio } from "antd";
import { ComponentProps, ReactNode } from "react";

type TRadioButton<G> = Omit<ComponentProps<"input">, "size" | "ref" | "name"> & {
    valueitemButton?: [
    {
      value: any;
      title?: string | ReactNode;
      disabled?: boolean;
    }
  ];
};

export const RadioButtonG = <G extends string>({ valueitemButton, ...rest }: TRadioButton<G>) => {
  return (
    <>
      {valueitemButton &&
        valueitemButton.map((item, index) => {
        //   <Radio.Button value={item.value}  {...rest}>{item.title}</Radio.Button>;
          <Radio.Button value={item.value} disabled={item.disabled}>{item.title}</Radio.Button>;
        })}
    </>
  );
};
