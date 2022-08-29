import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimePicker } from "./TimePicker";
import { TTimePicker } from "./timePicker.types";

export default {
  title: "Components/DropdownButton",
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args: TTimePicker) => (
  <TimePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {};
