import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TFormDropdownButton } from "components/form-dropdownbutton/FormDropdownButton";
import { DropdownButton } from "./DropdownButton";

export default {
  title: "Components/DropdownButton",
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>;

const Template: ComponentStory<typeof DropdownButton> = (
  args: TFormDropdownButton
) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "DropdownButton",
  options: [
    { key: 1, label: "Yes" },
    { key: 2, label: "No" },
  ],
};
