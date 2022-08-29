import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Uploader } from './Uploader'
import { ICUpload } from '../../icons'

export default {
  title: 'Component/Uploader',
  component: Uploader,
} as ComponentMeta<typeof Uploader>

const template: ComponentStory<typeof Uploader> = (args) => (
  <Uploader {...args}></Uploader>
)

export const Default = template.bind({})
Default.args = {
  beforeUpload: () => false,
  children: (
    <div className="border-dashed border-[1px] flex flex-col justify-center items-center p-2 w-36 hover:opacity-75 text-blue-500 border-blue-500 rounded-md">
      <ICUpload className="w-4" />
      <span className="text-sm mt-1">upload the file</span>
    </div>
  ),
}

export const Dragger = template.bind({})
Dragger.args = { ...Default.args, type: 'drag' }
