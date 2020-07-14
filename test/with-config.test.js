const { setupMockNuxt } = require('./_utils')

describe('with-config', () => {
  test('should render template with provided config', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        browserBaseURL: '/test_api',
        retry: true,
        serverTimeout: 10000,
        clientTimeout: 25000
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:3000/')
    expect(options.browserBaseURL).toBe('/test_api')
    expect(options.serverTimeout).toBe(10000)
    expect(options.clientTimeout).toBe(25000)
  })

  test('should set https to baseURL', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        https: true
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('https://localhost:3000/')
    expect(options.browserBaseURL).toBe('https://localhost:3000/')
  })

  test('should set retry=2 when retry=true', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        retry: true
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.retry).toBe(2)
  })

  test('should set correct number for retry', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        retry: 5
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.retry).toBe(5)
  })

  test('should give stringified object for retry', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        retry: { limit: 2, methods: ['get'] }
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.retry).toBe(JSON.stringify({ limit: 2, methods: ['get'] }))
  })

  test('should include @nuxtjs/proxy module if proxy: true', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        proxy: true
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    expect(nuxt.moduleContainer.requireModule).toBeDefined()
    expect(nuxt.moduleContainer.requireModule.mock.calls[0][0]).toStrictEqual(['@nuxtjs/proxy', {}])
  })

  test('should include @nuxtjs/proxy module and give proxy options', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        proxy: {
          hello: true
        }
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    expect(nuxt.moduleContainer.requireModule).toBeDefined()
    expect(nuxt.moduleContainer.requireModule.mock.calls[0][0]).toStrictEqual(['@nuxtjs/proxy', { hello: true }])
  })

  test('should handle `baseUrl` key', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        baseUrl: 'http://localhost:5000'
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost:5000')
  })

  test('should remove `:80` port if http', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        baseUrl: 'http://localhost:80'
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('http://localhost')
  })

  test('should remove `:443` port if https', async () => {
    const nuxt = await setupMockNuxt({
      http: {
        baseUrl: 'https://localhost:443'
      }
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(options.baseURL).toBe('https://localhost')
  })

  test('should handle static target', async () => {
    const nuxt = await setupMockNuxt({
      target: 'static'
    })
    expect(nuxt.moduleContainer.addTemplate).toBeDefined()
    const call = nuxt.moduleContainer.addTemplate.mock.calls.find(args => args[0].src.includes('plugin.js'))
    const options = call[0].options
    expect(nuxt.options.privateRuntimeConfig.http).toBeDefined()
    expect(nuxt.options.publicRuntimeConfig.http).toBeDefined()
    await nuxt.callHook('listen', null, { port: 1234, host: 'hello' })
    expect(nuxt.options.privateRuntimeConfig.http.baseURL).toBe('http://hello:1234/test_api')
    expect(nuxt.options.publicRuntimeConfig.http.browserBaseURL).toBe('/test_api')
    expect(options.baseURL).toBe('http://localhost:3000/test_api')
    expect(options.browserBaseURL).toBe('/test_api')
  })
})
