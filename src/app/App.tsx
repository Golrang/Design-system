import { CheckBox } from "components/checkbox/CheckBox";
import { Form } from "components/form/Form";
import { Input } from "components/input/Input";
import { Radio } from "components/radio/Radio";
import { FormSelect } from "components/form-select/FormSelect";
import { TextArea } from "components/text-area/TextArea";
import { FormUploader } from "components/form-uploader";
import * as yup from "yup";

type TFormProps = {
  name: string;
  age: number;
  email: string;
  company: string;
  isHired: boolean;
  isHe: string;
  upload: string;
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
  upload: yup
    .object()
    .test("required", "آپلود فایل اجباری می‌باشد", (file: any) => {
      if (file?.fileList.length > 0) {
        return true;
      } else {
        return false;
      }
    }),
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
        <Radio
          name="isHe"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
        />
        <FormUploader
          name="upload"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          className="border-gray-900 border-[1px] border-dashed p-2 block"
        ></FormUploader>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
