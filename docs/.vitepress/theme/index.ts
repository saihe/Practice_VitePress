import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'
import { VTimePicker } from 'vuetify/labs/VTimePicker'

const vuetify = createVuetify({
  directives,
  ssr: true,
  theme: {
    defaultTheme: 'dark'
  },
  components: {
    ...components,
    VTimePicker,
  },
})

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
  },
} satisfies Theme
