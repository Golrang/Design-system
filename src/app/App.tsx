import { FormCheckBox } from 'components/form-checkbox/FormCheckBox'
import { Form, TFormSchema } from 'components/form'

import { FormSelect } from 'components/form-select/FormSelect'
import { FormTextArea } from 'components/form-textarea/FormTextArea'
import * as yup from 'yup'
import { FormInput } from 'components/form-input/FormInput'
import { FormRadio } from 'components/form-radio/FormRadio'
import { FormDatePicker } from 'components/form-datepicker'
import { useWatch } from 'react-hook-form'

type TFormProps = {
  name: string
  age: number
  email: string
  company: string
  isHired: boolean
  isHe: string
  hiredDate: Date
}

type TKeyOfForm = keyof TFormProps

const schema = yup.object<TFormSchema<TFormProps>>({
  name: yup.string().required('نام لازم است'),
  age: yup
    .number()
    .required('سن لازم است')
    .positive('باید عدد مثبت باشد')
    .integer('باید عدد صحیح باشد'),
  email: yup.string().email().required('ایمیل لازم است'),
  company: yup.number().required('نام شرکت لازم است'),
  isHired: yup.boolean().required('وضعیت استخدام لازم است'),
  isHe: yup.string().required('جنسیت لازم است'),
  hiredDate: yup.date().required('تاریخ لازم است'),
})

const onSubmit = (state: TFormProps) => {
  console.log(state)
}

const CustomSelect = () => {
  const state2 = useWatch({ name: 'age' })
  console.log({ state2 })

  return (
    <FormSelect<TKeyOfForm>
      name="company"
      label="company"
      options={[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
      ]}
    />
  )
}

const defaultValues = {
  name: 'string',
  age: 10,
  email: '',
  company: '2',
  isHired: true,
  isHe: 'No',
}

export const App = () => {
  console.log('app')

  return (
    <div className=" max-w-md mx-auto p-32">
      <Form {...{ schema, onSubmit, defaultValues }}>
        <FormInput<TKeyOfForm> name="name" label="Name" />
        <FormTextArea<TKeyOfForm> name="age" label="Age" />
        <FormInput<TKeyOfForm> name="email" label="Email" />
        <CustomSelect />
        <FormCheckBox<TKeyOfForm> name="isHired" label="Is Hired" />
        <FormRadio
          name="isHe"
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
        />
        <FormDatePicker<TKeyOfForm> name="hiredDate" label="Date" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

// import { ColumnsType } from "antd/lib/table";
// import { Table, TColumn } from "components/table";

// type TTable = {
//   key: string;
//   name: string;
//   age: number;
//   email: string;
//   company: string;
// };

// const data: TTable[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     email: "",
//     company: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     email: "",
//     company: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     email: "",
//     company: "Sidney No. 1 Lake Park",
//   },
// ];

// const columns: TColumn<TTable>[] = [
//   {
//     title: "نام",
//     dataIndex: "name",
//     key: "name",
//     width: "20%",
//   },
//   {
//     title: "سن",
//     dataIndex: "age",
//     key: "age",
//     width: "20%",
//   },
//   {
//     title: "ایمیل",
//     dataIndex: "email",
//     key: "email",
//     width: "20%",
//   },
//   {
//     title: "شرکت",
//     dataIndex: "company",
//     key: "company",
//     width: "20%",
//   },
// ];

// export const App = () => {
//   return (
//     <div>
//       <Table
//         direction="rtl"
//         dataSource={data}
//         columns={columns}
//         className="w-full text-sm text-right text-gray-500 dark:text-gray-400"
//       />
//     </div>
//   );
// };
// import { Paragraph } from "components/typography/paragraph/Paragraph";

// export const App = () => {
//   return (
//     <div className=" max-w-md mx-auto py-32">
//       <Paragraph code={true}>Test</Paragraph>
//     </div>
//   );
// };
