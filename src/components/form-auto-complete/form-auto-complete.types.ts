import { TAutoComplete } from "components/auto-complete/auto-complete.types";

export type TFormAutoComplete<G> = {
  label?: string;
  name: G;
} & TAutoComplete;
