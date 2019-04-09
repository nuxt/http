const { setupNuxt } = require('./_utils')

describe('browserBaseURL', () => {
  let nuxt

  test('setup', async () => {
    nuxt = await setupNuxt({
      http: {
        browserBaseURL: '/test_api'
      }
    })
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('custom', () => {
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('/test_api')
  })
})
