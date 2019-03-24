module.exports = {
  title: 'HTTP Module',
  description: 'Universal HTTP Module for Nuxt',
  themeConfig: {
    repo: 'nuxt/http',
    docsDir: 'docs',
    editLinks: true,
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/',
          'setup',
          'usage',
          'options',
          'helpers',
          'hooks',
        ]
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/'
      },
      {
        text: 'Release notes',
        link: 'https://github.com/nuxt/http/blob/dev/CHANGELOG.md'
      }
    ]
  }
}
