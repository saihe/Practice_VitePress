import { Decorator } from '@storybook/vue3'
import { VApp } from 'vuetify/components'

export const DEFAULT_THEME = 'dark'

export const withVuetifyTheme: Decorator = (storyFn, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME
  return {
    components: {storyFn, VApp },
    template: `
      <v-app theme="${globalTheme}">
        <story />
      </v-app>
    `
  }
}
