import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "./Radio";
import { TRadio } from "./radio.types";

export default {
  title: "Components/Input",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: TRadio) => (
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
