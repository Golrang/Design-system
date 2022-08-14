import { TSelect } from "components/select/select.types";

export type TFormSelect<G> = {
    label?: string;
    name: G;
} & TSelect;