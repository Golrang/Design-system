import { FormCheckBox } from "components/form-checkbox/FormCheckBox";
import { Form } from "components/form/Form";

import { FormSelect } from "components/form-select/FormSelect";
import { FormTextArea } from "components/form-textarea/FormTextArea";
import * as yup from "yup";
import { FormInput } from "components/form-input/FormInput";
import { FormRadio } from "components/form-radio/FormRadio";
import { ICUpload } from "icons/UploadIcon";
import { Table } from "components/table";

type TFormProps = {
  name: string;
  age: number;
  email: string;
  company: string;
  isHired: boolean;
  isHe: string;
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
});


const UploadButton = () => (
  <button className="bg-cyan-400 text-white p-2 rounded">
    <span>upload a file</span>
    <ICUpload className="ml-2 w-4 inline" />
  </button>
);

// Table 
export type TTable = {
  name: string;
  age: number;
  email: string;
  company: string;
}

const tableColumns = [
  {
    title: "نام",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "سن",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "ایمیل",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },
  {
    title: "شرکت",
    dataIndex: "company",
    key: "company",
    width: "20%",
  },
]

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    email: "",
    company: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    email: "",
    company: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    email: "",
    company: "Sidney No. 1 Lake Park",
  },
]

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);

  return (
    <div >
      <Form<TFormProps> {...{ schema, onSubmit }}>
        <FormInput<TKeyOfForm> name="name" label="Name" />
        <FormTextArea<TKeyOfForm> name="age" label="Age" />
        <FormInput<TKeyOfForm> name="email" label="Email" />
        <FormSelect<TKeyOfForm> name="company" label="company" options={[{ value: "1", label: "One" }]} />
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

      // limit table to type TTable
      <Table direction="rtl" dataSource={data} columns={tableColumns} className="w-full text-sm text-right text-gray-500 dark:text-gray-400" />
    </div>
  );
};
