import { ComponentStory, ComponentMeta } from "@storybook/react";

import {Button, TButton } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: TButton) => (
  <Button {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  children: "Subscribe",
  // colorType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Subscribe",
  // colorType: "secondary",
};

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  children: "Default",
  colorType: "Default",
  size:"Base",
  shape:"Round",
};

export const DisableBtn = Template.bind({});
DisableBtn.args = {
  children: "disabled",
  colorType: "Alternative",
  disabled: true,
};