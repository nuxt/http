const { setupMockNuxt } = require('./_utils')

describe('browserBaseURL', () => {
  let nuxt

  beforeAll(async () => {
    nuxt = await setupMockNuxt({
      http: {
        browserBaseURL: '/test_api',
        retry: true
      }
    })
  })

  test('browserBaseURL', () => {
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('/test_api')
  })
})
