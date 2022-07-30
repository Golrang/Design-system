import { useForm, FormProvider } from "react-hook-form";
import { Form } from "antd";
import { ComponentProps } from "react";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { useYupValidationResolver } from "../../useResolver";

type TForm<T> = Omit<ComponentProps<"form">, "ref" | "onSubmit"> & {
  onSubmit: (values: T) => void;
};

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required")
});

// const resolver = useYupValidationResolver(validationSchema);

const Provider = FormProvider as any;

export const FormG = <T extends {}>({
  children,
  onSubmit,
  ...rest
}: TForm<T>) => {
  const { control, handleSubmit } = useForm<T>();

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
