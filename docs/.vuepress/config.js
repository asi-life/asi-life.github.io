module.exports = {
  title: 'VuePress Blog Demo',        // TODO
  description: 'VuePress Blog Demo',  // TODO
  dest: 'public',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  themeConfig: {
    logo: '',           // TODO
    author: '',         // TODO
    authorAvatar: '',   // TODO
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '关于',
        icon: 'reco-message',
        items: [
          {
            text: '留言板',
            link: '/views/message-board.html',
            icon: 'reco-suggestion'
          },
        ]
      }
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 1,
        text: '分类'
      },
      tag: {
        location: 2,
        text: '标签'
      }
    },
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    startYear: '2020',          // TODO
    record: 'China',            // TODO
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: 'Life\'s Moment',
        desc: 'Life\'s Moment',
        logo: 'https://cdn.jsdelivr.net/gh/ty-peng/ty-peng.github.io/logo.png',
        link: 'https://ty-peng.gitee.io/'
      },
    ],
    smoothScroll: true,
    valineConfig: {
      appId: '',          // TODO
      appKey: '',         // TODO
      avatar: 'retro',
      placeholder: '',
      verify: true
    }
  },
  markdown: {
    lineNumbers: false
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ')
        }
      }
    ]
  ]
}
