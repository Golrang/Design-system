import { CheckBox } from "components/checkbox/CheckBox";
import { Form } from "components/form/Form";
import { FormInput } from "components/form-input/FormInput";
import { Radio } from "components/radio/Radio";
import { FormSelect } from "components/form-select/FormSelect";
import { FormTextArea } from "components/form-textarea/FormTextArea";
import * as yup from "yup";
import { FormUploader } from "components/form-uploader";
import { ICUpload } from "icons";
import { useMessage } from "hooks";

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
  upload: yup.object().required("آپلود فایل الزامی است"),
});

const UploadButton = () => (
  <button className="bg-cyan-400 text-white p-2 rounded">
    <span>upload a file</span>
    <ICUpload className="ml-2 w-4 inline" />
  </button>
);

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  const { success } = useMessage();
  return (
    <div className=" max-w-md mx-auto p-32">
      <Form<TFormProps> {...{ schema, onSubmit }}>
        <FormInput<TKeyOfForm> name="name" label="Name" />
        <FormTextArea<TKeyOfForm> name="age" label="Age" />
        <FormInput<TKeyOfForm> name="email" label="Email" />
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
          beforeUpload={() => false}
          className="border-gray-900 border-[1px] border-dashed p-2 block"
          onDrop={(e) => {
            console.log("e", e);
          }}
          type="drag"
        >
          <UploadButton />
        </FormUploader>
        <div className="flex flex-col spae-y -6">
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => success("Some")}>
            Call
          </button>
        </div>
      </Form>
    </div>
  );
};
