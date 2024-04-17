import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './style.css'

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
})

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
  },
} satisfies Theme
