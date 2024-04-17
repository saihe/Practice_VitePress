import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja_JP',
  title: 'レーベン勤怠管理システム',
  description: '株式会社レーベン社内システムのうちのひとつ。',
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  },
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ダッシュボード', link: '/', noIcon: false },
      { text: '勤怠一覧', link: '/attendance' },
      {
        text: '勤怠管理',
        items: [
          { text: '勤務開始', link: '/' },
          { text: '勤務終了', link: '/' },
          { text: '休憩開始', link: '/' },
          { text: '休憩終了', link: '/' },
        ],
      },
      {
        text: '各種申請',
        items: [
          { text: '届出申請', link: '/tmp' },
          { text: '交通費申請', link: '/tmp' },
          { text: '給与控除変更申請', link: '/tmp' },
        ],
      },
      {
        text: '定例業務',
        items: [
          { text: '週次報告書', link: '/tmp' },
          { text: '月次作業報告書', link: '/tmp' },
        ],
      },
    ],

    sidebar: [
      {
        text: '各種申請',
        items: [
          { text: '届出申請', link: '/tmp' },
          { text: '交通費申請', link: '/tmp' },
          { text: '給与控除変更申請', link: '/tmp' },
        ],
        collapsed: false,
      },
      {
        text: '定例業務',
        items: [
          { text: '週次報告書', link: '/tmp' },
          { text: '月次作業報告書', link: '/tmp' },
        ],
        collapsed: false,
      },
    ],

    footer: {
      message: 'https://www.lbn.co.jp',
    },
  }
})
