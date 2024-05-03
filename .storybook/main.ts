import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: [
    '../docs/.vitepress/theme/**/*.mdx',
    '../docs/.vitepress/theme/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  async viteFinal(config, options) {
    // Add your configuration here
    return config
  },
}

export default config
