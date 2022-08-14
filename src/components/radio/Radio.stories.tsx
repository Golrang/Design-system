import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TFormRadio } from "components/form-radio/FormRadio";
import { Radio } from "./Radio";

export default {
  title: "Components/Input",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: TFormRadio) => (
  <Radio {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "1", label: "Yes" },
    { value: "2", label: "No" },
  ],
};

export const Disable = Template.bind({});
Disable.args = {
  options: [
    { value: "1", label: "Option a" },
    { value: "2", label: "Option a" },
    { value: "3", label: "Option c", disabled: true },
  ],
};
