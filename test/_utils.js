const { Nuxt, Builder } = require('nuxt-edge')

const defaultConfig = require('./fixture/nuxt.config')

jest.setTimeout(60000)

async function setupMockNuxt(config) {
  const nuxt = new Nuxt({
    ...defaultConfig,
    ...config,
    _ready: false
  })

  nuxt.moduleContainer.addTemplate = jest.fn(nuxt.moduleContainer.addTemplate)

  await nuxt.ready()

  const builder = new Builder(nuxt)

  await builder.validatePages()
  await builder.generateRoutesAndFiles()
  nuxt.builder = builder

  return nuxt
}

async function setupNuxt(config) {
  const nuxt = new Nuxt({
    ...defaultConfig,
    ...config,
    _ready: false
  })

  jest.spyOn(nuxt.moduleContainer, 'addTemplate')

  await nuxt.ready()

  const builder = new Builder(nuxt)
  nuxt.builder = builder

  return nuxt
}

module.exports = {
  setupMockNuxt,
  setupNuxt
}
