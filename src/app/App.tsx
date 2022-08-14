import { CheckBox } from "components/checkbox/CheckBox";
import { Form } from "components/form/Form";
import { Input } from "components/input/Input";
import { FormSelect } from "components/form-select/FormSelect";
import { TextArea } from "components/text-area/TextArea";
import * as yup from "yup";
import { FormRadio } from "components/form-radio/FormRadio";
import { FormButton } from "components/form-button/FormButton";
import { FormDropdownButton } from "components/form-dropdownbutton/FormDropdownButton";
import { Button } from "components/button/Button";

type TFormProps = {
  name: string;
  age: number;
  email: string;
  company: string;
  isHired: boolean;
  isHe: string;
  groupbutton: string;
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
  company: yup.number().required("نام شرکت لازم است"),
  isHired: yup.boolean().required("وضعیت استخدام لازم است"),
  isHe: yup.string().required("وضعیت استخدام لازم است"),
  groupbutton: yup.string().required("وضعیت استخدام لازم است"),
});

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  return (
    <div className=" max-w-md mx-auto p-32">
      <Form<TFormProps> {...{ schema, onSubmit }}>
        <Input<TKeyOfForm> name="name" label="Name" />
        <TextArea<TKeyOfForm> name="age" label="Age" />
        <Input<TKeyOfForm> name="email" label="Email" />
        <FormSelect
          name="company"
          label="company"
          options={[{ value: "1", label: "One" }]}
        />
        <CheckBox name="isHired" label="Is Hired" />
        <FormRadio
          name="isHe"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
        <FormDropdownButton<TKeyOfForm>
          name="groupbutton"
          options={[
            { key: 1, label: "submit" },
            { key: 2, label: "cancel" },
          ]}
        >
          نوع عملیات
        </FormDropdownButton>

        <Button htmlType="submit" type="primary" shape="round">
          submit
        </Button>

        {/* <button type="submit">Submit</button> */}
      </Form>
    </div>
  );
};
