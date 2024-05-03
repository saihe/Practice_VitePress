import type { Meta, StoryObj, Args } from '@storybook/vue3'
import TimePickerWithTextField from './TimePickerWithTextField.vue'

const meta: Meta<typeof TimePickerWithTextField> = {
  title: 'TimePickerWithTextField',
  component: TimePickerWithTextField,
  render: (args: Args) => ({
    components: { TimePickerWithTextField },
    setup() { return { args } },
    template: '<TimePickerWithTextField :initialValue="args.initialValue" />',
  })
}
export default meta

type Story = StoryObj<typeof TimePickerWithTextField>

export const SetInitialValue: Story = {
  args: {
    initialValue: '09:00:00',
  },
}

export const MagicNumberString: Story = {
  render: () => ({
    components: { TimePickerWithTextField },
    template: `<TimePickerWithTextField :initialValue="'00:00:00'" />`,
  })
}

export const NoValue: Story = {
  args: {
    initialValue: '',
  }
}

export const HideIcon: Story = {
  render: () => ({
    components: { TimePickerWithTextField },
    template: `<TimePickerWithTextField hideIcon />`,
  })
}
