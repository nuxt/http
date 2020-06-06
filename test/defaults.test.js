const { setupMockNuxt } = require('./_utils')

describe('defaults', () => {
  test('should render template with defaults', async () => {
    const nuxt = await setupMockNuxt({
      http: {}
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('http://localhost:3000/')
    expect(options.clientTimeout).toBe(false)
    expect(options.serverTimeout).toBe(false)
    expect(options.proxyHeaders).toBe(true)
    expect(options.proxyHeadersIgnore).toStrictEqual(['accept', 'host', 'cf-ray', 'cf-connecting-ip', 'content-length', 'content-md5', 'content-type'])
    expect(options.https).toBe(false)
    expect(options.retry).toBe(0)
  })
})
