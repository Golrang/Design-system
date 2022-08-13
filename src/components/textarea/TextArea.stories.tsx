import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormTextArea } from "../form-textarea/FormTextArea";

export default {
  title: "Components/TextArea",
  component: FormTextArea,
} as ComponentMeta<typeof FormTextArea>;

const Template: ComponentStory<typeof FormTextArea> = (args) => (
  <FormTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = { label: "Name" };
