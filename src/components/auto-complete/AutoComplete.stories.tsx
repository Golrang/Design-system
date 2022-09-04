import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AutoComplete } from './AutoComplete'

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

const template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
)

const options = [
  {
    value: 'ali',
    label: 'ali',
  },
  {
    value: 'ahmad',
    label: 'ahmad',
  },
  {
    value: 'bahman',
    label: 'bahman',
  },
]

export const Default = template.bind({})
Default.args = {
  style: { width: 200 },
  placeholder: 'input here',
  options: options,
  onSearch: (value: string) => {
    console.log('value: ', value)
  },
  filterOption: (inputValue, option) =>
    option!
      .value!.toString()
      .toUpperCase()
      .indexOf(inputValue.toUpperCase()) !== -1,
}
