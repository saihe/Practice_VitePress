import type { Meta, StoryObj, Args } from '@storybook/vue3'
import DatePickerWithTextField from './DatePickerWithTextField.vue'
import { VDataTable } from 'vuetify/components'

const meta: Meta<typeof DatePickerWithTextField> = {
  title: 'DatePickerWithTextField',
  component: DatePickerWithTextField,
  render: (args: Args) => ({
    components: { DatePickerWithTextField },
    setup() { return { args } },
    template: '<DatePickerWithTextField :model-value="args" />',
  })
}
export default meta

type Story = StoryObj<typeof DatePickerWithTextField>

export const Default: Story = {
  args: {
    initialValue: '2024-01-01',
  },
}

export const MagicNumberString: Story = {
  render: () => ({
    components: { DatePickerWithTextField },
    template: '<DatePickerWithTextField :initialValue="`2024-04-01`" />',
  })
}

export const InVDataTable: Story = {
  render: () => ({
    components: { VDataTable, DatePickerWithTextField },
    template: `
      <v-data-table
        :headers="[{ text: '項目1', value: 'col1' }, { text: '項目2', value: 'col2' }, { text: '項目3', value: 'col3' }]"
        :items="[{col1: 1, col2: '2024-01-01', col3: 'ほげ'}]"
      >
        <template v-slot:item.col2="{ item }">
          <DatePickerWithTextField :initialValue="item.col2" />
        </template>
      </v-data-table>
    `
  })
}

export const ViewModeMonth: Story = {
  render: () => ({
    components: { DatePickerWithTextField },
    template: '<DatePickerWithTextField :initialValue="`2024-04-01`" :viewMode="`months`" />',
  })
}

export const HideIcon: Story = {
  render: () => ({
    components: { DatePickerWithTextField },
    template: '<DatePickerWithTextField hideIcon />',
  }),
}
