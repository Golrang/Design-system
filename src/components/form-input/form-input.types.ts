import { ComponentProps } from "react";

export type TFormInput<G> = Omit<
  ComponentProps<"input">,
  "size" | "ref" | "name"
> & {
  label?: string;
  name: G;
};