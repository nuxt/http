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
        collapsable: false,
        children: [
          '/',
          'setup',
          'usage',
          'options',
          'advanced',
          'migration'
        ]
      }
    ],
    nav: [
      {
        text: 'Release Notes',
        link: 'https://github.com/nuxt/http/blob/dev/CHANGELOG.md'
      }
    ]
  }
}
