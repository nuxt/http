module.exports = {
  title: 'HTTP Module',
  description: 'Universal HTTP Module for Nuxt',
  themeConfig: {
    repo: 'nuxt/http',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    displayAllHeaders: false,
    sidebar: {
      '/guide/': [
        {
          collapsable: false,
          children: [
            '/guide/',
            '/guide/usage',
            '/guide/advanced',
            '/guide/migration'
          ]
        }
      ],
      '/api/': [
        {
          collapsable: false,
          children: [
            '/api/',
            '/api/runtime-config',
            '/api/helpers',
            '/api/hooks',
            '/api/http-methods'
          ]
        }
      ],
      '/': [
        ['/', 'Introduction'],
        ['/guide/', 'Guide'],
        ['/api/', 'API']
      ]
    },
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
