import { FormCheckBox } from "components/form-checkbox/FormCheckBox";
import { Form, TFormSchema } from "components/form";

import { FormSelect } from "components/form-select/FormSelect";
import { FormTextArea } from "components/form-textarea/FormTextArea";
import * as yup from "yup";
import { FormInput } from "components/form-input/FormInput";
import { FormRadio } from "components/form-radio/FormRadio";

type TFormProps = {
  name: string;
  age: number;
  email: string;
  company: string;
  isHired: boolean;
  isHe: string;
};

type TKeyOfForm = keyof TFormProps;

const schema = yup.object<TFormSchema<TFormProps>>({
  name: yup.string().required("نام لازم است"),
  age: yup
    .number()
    .required("سن لازم است")
    .positive("باید عدد مثبت باشد")
    .integer("باید عدد صحیح باشد"),
  email: yup.string().email().required("ایمیل لازم است"),
  company: yup.number().required("نام شرکت لازم است"),
  isHired: yup.boolean().required("وضعیت استخدام لازم است"),
  isHe: yup.string().required("جنسیت لازم است"),
});

const onSubmit = (state: TFormProps) => {
  console.log(state.age);
};

export const App = () => {
  return (
    <div className=" max-w-md mx-auto p-32">
      <Form {...{ schema, onSubmit }}>
        <FormInput<TKeyOfForm> name="name" label="Name" />
        <FormTextArea<TKeyOfForm> name="age" label="Age" />
        <FormInput<TKeyOfForm> name="email" label="Email" />
        <FormSelect<TKeyOfForm>
          name="company"
          label="company"
          options={[{ value: "1", label: "One" }]}
        />
        <FormCheckBox<TKeyOfForm> name="isHired" label="Is Hired" />
        <FormRadio
          name="isHe"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
