const { setupMockNuxt } = require('./_utils')

describe('empty config', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = await setupMockNuxt({
      http: {}
    })
  })

  test('preset baseURL and browserBaseURL', () => {
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL.toString()).toBe('http://localhost:3000/')
    expect(options.browserBaseURL.toString()).toBe('http://localhost:3000/')
  })
})
