import { ButtonG } from "components/button/Button";
import { FormG } from "components/form/Form";
import { InputG } from "components/input/Input";
import { RadioGroupG } from "components/radio/RadioGroup";
import { useWatch } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";
type TFormProps = {
  name: string;
  user: string;
  age: number;
  other: number;
  button: string;
  button_1: string;
};

type TInputProps = keyof TFormProps;

const App2 = () => {
  const state = useWatch();
  console.log(state);

  return <InputG<TInputProps> name="name" label="Name" />;
};

export const App = () => {
  const options = [
    { value: 1, label: "somaye", disabled: true },
    { value: 2, label: "somayetest" },
    { value: 3, label: "somaye3" },
    { value: 4, label: "somaye4" },
  ];

  const items = [
    {
      key: "1",
      label: "1st item",
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
  ];

  return (
    <div className=" max-w-md mx-auto p-32">
      <FormG<TFormProps> onSubmit={(state) => console.log(state.user)}>
        <App2 />
        <InputG<TInputProps> name="user" label="User" />
        <RadioGroupG<TInputProps>
          options={options}
          name="age"
          optionType="button"
          size="large"
        />
        <RadioGroupG<TInputProps> options={options} name="other" />
        <ButtonG<TInputProps>
          name="button"
          htmlType="reset"
          type="primary"
          icon={<SearchOutlined />}
          isDropDownButton={true}
          drowpdownItems={items}
        >
          clickme
        </ButtonG>


        <ButtonG<TInputProps>
          name="button_1"
          htmlType="button"
          type="primary"
          danger
          // loading
        >
          clickme
        </ButtonG>

        {/* <button type="submit">Submit</button> */}
      </FormG>
    </div>
  );
};
