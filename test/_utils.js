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

  const builder = new Builder(nuxt)

  await builder.validatePages()
  await builder.generateRoutesAndFiles()
  nuxt.builder = builder

  await nuxt.ready()

  return nuxt
}

module.exports = {
  setupNuxt
}
