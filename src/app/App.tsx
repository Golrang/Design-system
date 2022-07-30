import { CheckBox } from "components/checkbox/CheckBox";
import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import { SelectElement } from "components/select/Select";
import { useWatch } from "react-hook-form";

type TFormProps = { name: string; user: string; age: number, single: boolean, sex: string };

type TInputProps = keyof TFormProps;

const App2 = () => {
  const state = useWatch();
  console.log(state);

  return <InputG<TInputProps> name="name" label="Name" />;
};

export const App = () => {
  return (
    <div className=" max-w-md mx-auto p-32">
      <FormG<TFormProps> onSubmit={(state) => console.log(state.user)}>
        <App2 />
        <InputG<TInputProps> name="user" label="User" />
        <CheckBox<TInputProps> name="single" label="متاهل"></CheckBox>
        <SelectElement label="وضعیت نظام وظیفه" />
        <button type="submit" className="bg-blue-600 text-white w-16">Submit</button>
      </FormG>
    </div>
  );
};
