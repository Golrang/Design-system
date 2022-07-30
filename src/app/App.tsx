import { CheckBoxG } from "components/checkbox/CheckBox";
import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import { SelectElement } from "components/select/Select";
import * as yup from "yup";

type TFormProps = {
  name: string;
  age: number;
  email: string;
  company: string;
  isHired: boolean;
};

type TKeyOfForm = keyof TFormProps;

type TSchema<T> = {
  [P in keyof T]: any;
};

const schema = yup.object<TSchema<TFormProps>>({
  name: yup.string().required("نام لازم است"),
  age: yup
    .number()
    .required("سن لازم است")
    .positive("باید عدد مثبت باشد")
    .integer("باید عدد صحیح باشد"),
  email: yup.string().email().required("ایمیل لازم است"),
  company: yup.string().required("نام شرکت لازم است"),
  isHired: yup.boolean().required("وضعیت استخدام لازم است"),
});

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  return (
    <div className=" max-w-md mx-auto p-32">
      <FormG<TFormProps> {...{ schema, onSubmit }}>
        <InputG<TKeyOfForm> name="name" label="Name" />
        <InputG<TKeyOfForm> name="age" label="Age" />
        <InputG<TKeyOfForm> name="email" label="Email" />
        <SelectElement
          name="company"
          label="company"
          options={[{ value: "1", label: "One" }]}
        />
        <CheckBoxG name="isHired" label="Is Hired" />
        <button type="submit">Submit</button>
      </FormG>
    </div>
  );
};
