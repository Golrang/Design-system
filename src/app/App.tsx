import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import * as yup from "yup";

type TFormProps = { name: string; age: number; email: string };

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
  email: yup.string().email().required(),
});

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  return (
    <div className=" max-w-md mx-auto p-32">
      <FormG<TFormProps> {...{ schema, onSubmit }}>
        <InputG<TKeyOfForm> name="name" label="Name" />
        <InputG<TKeyOfForm> name="age" label="Age" />
        <InputG<TKeyOfForm> name="email" label="Email" />
        <button type="submit">Submit</button>
      </FormG>
    </div>
  );
};
