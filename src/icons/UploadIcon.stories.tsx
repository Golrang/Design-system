import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ICUpload } from './UploadIcon'

export default {
  title: 'icons/UploadIcon',
  component: ICUpload,
} as ComponentMeta<typeof ICUpload>

const template: ComponentStory<typeof ICUpload> = (args) => (
  <ICUpload {...args} />
)

export const Primary = template.bind({})
Primary.args = { className: 'w-4 text-green-500' }
