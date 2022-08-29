import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropdownButton, TDropdownButton } from './DropdownButton'

export default {
  title: 'Components/DropdownButton',
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (
  args: TDropdownButton
) => <DropdownButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'DropdownButton',
  // children: [
  //   { key: 1, label: "Yes" },
  //   { key: 2, label: "No" },
  // ],
}
