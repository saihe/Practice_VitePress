import type { Preview } from '@storybook/vue3'
import  { setup }  from '@storybook/vue3'
import type { App } from 'vue'
import { withVuetifyTheme } from './withVuetifyTheme.decorator'
import { registerPlugins } from '../docs/.vitepress/theme/plugins'

setup((app: App) => {
  registerPlugins(app)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withVuetifyTheme],
}

export default preview
