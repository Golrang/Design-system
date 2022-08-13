import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UploadIcon } from "./UploadIcon";

export default {
  title: "icons/UploadIcon",
  component: UploadIcon,
} as ComponentMeta<typeof UploadIcon>

const template: ComponentStory<typeof UploadIcon> = (args) => <UploadIcon {...args} /> 

export const Primary = template.bind({})
Primary.args = {className: 'w-4 text-green-500'}