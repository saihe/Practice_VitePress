import type { Meta, StoryObj, Args } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  render: (args: Args) => ({
    components: { Button },
    setup() { return { args } },
    template: '<Button :color="args.color" :text="args.text" :onClick="args.onClick" />',
  })
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const SpecifyText: Story = {
  args: {
    text: 'テキスト',
  },
}

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
  },
}

export const ShowAlertOnClick: Story = {
  args: {
    onClick: () => alert('button clicked.'),
  },
}
