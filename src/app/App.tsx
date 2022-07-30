import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import { TextareaG } from "components/textarea";
import { useWatch } from "react-hook-form";

type TFormProps = { name: string; user: string; age: number, message: string; };
type TTextareaProps = keyof TFormProps;
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
        {/* <App2 /> */}
        <InputG<TInputProps> name="user" label="User" />
        <TextareaG<TTextareaProps> name="message" label="Message" rows={5} />
        <button type="submit">Submit</button>
      </FormG>
    </div>
  );
};
