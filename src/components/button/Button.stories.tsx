import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { TButton } from "./button.types";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: TButton) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "button",
  children: "submit",
  type: "primary",
  htmlType: "submit",
  size: "middle",
  shape: "round",
};
