const { setupMockNuxt } = require('./_utils')

describe('with-config', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = await setupMockNuxt({
      http: {
        browserBaseURL: '/test_api',
        retry: true,
        serverTimeout: 10000,
        clientTimeout: 25000
      }
    })
  })

  test('should render template with provided config', () => {
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('/test_api')
    expect(options.clientTimeout).toBe(10000)
    expect(options.serverTimeout).toBe(25000)
  })
})
