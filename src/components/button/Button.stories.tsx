import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TFormButton } from 'components/form-button/FormButton'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: TFormButton) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'button',
  children: 'submit',
  type: 'primary',
  htmlType: 'submit',
  size: 'middle',
  shape: 'round',
}
