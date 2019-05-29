const { setupMockNuxt } = require('./_utils')

describe('defaults', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = await setupMockNuxt({
      http: {}
    })
  })

  test('should render template with defaults', () => {
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('http://localhost:3000/')
    expect(options.clientTimeout).toBe(false)
    expect(options.serverTimeout).toBe(false)
  })
})
