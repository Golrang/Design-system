import { ComponentStory, ComponentMeta } from "@storybook/react";

import {RadioButton ,TRadioButton} from "./RadioButton";

export default {
  title: "Component/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args: TRadioButton) => (
  <RadioButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Subscribe",
};
