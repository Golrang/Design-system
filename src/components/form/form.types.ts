import { ComponentProps } from "react";
import { OptionalObjectSchema } from "yup/lib/object";

export type TFormSchema<T> = Record<keyof T, any>;

export type TForm<T> = Omit<ComponentProps<"form">, "ref" | "onSubmit"> & {
  onSubmit: (values: T) => void;
  schema?: OptionalObjectSchema<any>;
};
