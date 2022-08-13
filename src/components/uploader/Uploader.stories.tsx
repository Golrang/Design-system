import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Uploader } from "./Uploader";
import { UploadIcon } from "../icons/UploadIcon";

export default {
  title: "Component/Uploader",
  component: Uploader,
} as ComponentMeta<typeof Uploader>;

const template: ComponentStory<typeof Uploader> = (args) => (
  <Uploader {...args}></Uploader>
);

export const Default = template.bind({});
Default.args = {
  beforeUpload: () => false,
  children: 'upload the file',
};

export const Version1 = template.bind({});
Version1.args = {
  beforeUpload: () => false,
  children: (
    <div className="border-dashed border-[1px] flex flex-col justify-center items-center p-2 w-36 hover:opacity-75 text-blue-500 border-blue-500 rounded-md">
      <UploadIcon className="w-4" />
      <span className="text-sm mt-1">upload the file</span>
    </div>
  ),
};
