module.exports = {
  title: 'HTTP Module',
  description: 'Universal HTTP Module for Nuxt',
  themeConfig: {
    repo: 'nuxt/http',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    displayAllHeaders: true,
    sidebar: [
      {
        collapsable: false,
        children: [
          '/',
          '/guide/',
          '/guide/usage',
          '/guide/advanced',
          '/guide/migration'
        ]
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'API',
        link: '/api/'
      }, {
        text: 'Release Notes',
        link: 'https://github.com/nuxt/http/blob/dev/CHANGELOG.md'
      }
    ]
  }
}
