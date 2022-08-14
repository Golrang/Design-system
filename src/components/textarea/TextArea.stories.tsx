import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormTextArea } from "../form-textarea/FormTextArea";
import { TextArea } from "./TextArea";

export default {
  title: "Components/TextArea",
  component: FormTextArea,
} as ComponentMeta<typeof FormTextArea>;

const Template: ComponentStory<typeof FormTextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = { label: "Name" };
