import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormUploader } from "./FormUploader";

export default {
    title: 'Component/FormUploader',
    component: FormUploader
} as ComponentMeta<typeof FormUploader>

const template: ComponentStory<typeof FormUploader> = (args) => <FormUploader {...args}></FormUploader>

export const Default = template.bind({})
Default.args = {label: 'Upload', name: "upload"}