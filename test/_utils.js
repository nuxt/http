const { Nuxt, Builder } = require('nuxt-edge')

const defaultConfig = require('./fixture/nuxt.config')

jest.setTimeout(60000)

async function setupNuxt(config) {
  const nuxt = new Nuxt({
    ...defaultConfig,
    ...config
  })

  // Spy addTemplate
  nuxt.moduleContainer.addTemplate = jest.fn(nuxt.moduleContainer.addTemplate)

  const build = new Builder(nuxt)

  await build.validatePages()
  await build.generateRoutesAndFiles()

  await nuxt.listen(3000)

  return nuxt
}

module.exports = {
  setupNuxt
}
