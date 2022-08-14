import { TCheckBox } from "components/checkbox/checkbox.types";

export type TFormCheckBox<G> = {
    label: string;
    name: G;
} & TCheckBox