import { useForm, FormProvider } from "react-hook-form";
import { Form } from "antd";
import { ComponentProps } from "react";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { OptionalObjectSchema } from "yup/lib/object";

type TForm<T> = Omit<ComponentProps<"form">, "ref" | "onSubmit"> & {
  onSubmit: (values: T) => void;
  schema?: OptionalObjectSchema<any>;
};

const Provider = FormProvider as any;

export const FormG = <T extends {}>({
  children,
  onSubmit,
  schema,
  ...rest
}: TForm<T>) => {
  const { control, handleSubmit } = useForm<T>({
    ...(schema && { resolver: yupResolver(schema) }),
  });

  return (
    <>
      <Provider {...{ control }}>
        <Form {...rest} onFinish={handleSubmit(onSubmit)}>
          {children}
        </Form>
      </Provider>
      <DevTool control={control} />
    </>
  );
};
