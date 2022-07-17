import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import { useWatch } from "react-hook-form";

type TFormProps = { name: string; user: string; age: number };

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
        <button type="submit">Submit</button>
      </FormG>
    </div>
  );
};
