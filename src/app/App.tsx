import { CheckBox } from "components/checkbox/CheckBox";
import { Form } from "components/form/Form";
import { Input } from "components/input/Input";
import { Select } from "components/select/Select";
import { TextArea } from "components/textarea/TextArea";
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
      <Form<TFormProps> {...{ schema, onSubmit }}>
        <Input<TKeyOfForm> name="name" label="Name" />
        <TextArea<TKeyOfForm> name="age" label="Age" />
        <Input<TKeyOfForm> name="email" label="Email" />
        <Select
          name="company"
          label="company"
          options={[{ value: "1", label: "One" }]}
        />
        <CheckBox name="isHired" label="Is Hired" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
