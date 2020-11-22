const fetch = require('node-fetch')
const { createBrowser } = require('tib')
const { setupNuxt } = require('./_utils')

const url = path => `http://localhost:3000${path}`

describe('module', () => {
  let nuxt, browser

  beforeAll(async () => {
    nuxt = await setupNuxt()
    await nuxt.builder.build()
    await nuxt.listen(3000)
    browser = await createBrowser('puppeteer')
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
    await browser.close()
  })

  test('asyncData', async () => {
    const html = await fetch(url('/asyncData')).then(r => r.text())
    expect(html).toContain('foo/bar')
  })

  test('mounted', async () => {
    const page = await browser.page(url('/mounted'))
    const html = await page.getHtml()
    expect(html).toContain('foo/bar')
  })

  test('index', async () => {
    const page = await browser.page(url('/'))
    const html = await page.getHtml()
    expect(html).toContain('foo/bar')
  })

  test('defaults', async () => {
    const page = await browser.page(url('/mounted'))
    const defaults = await page.runScript(() => window.$nuxt.$http._defaults)
    expect(defaults.headers.xsrfHeaderName).toBe('X-CSRF-TOKEN')
  })

  test('error', async () => {
    const html = await fetch(url('/error')).then(r => r.text())
    expect(html).toMatch('res:{statusCode:418,message:"Detailed error message"}')
  })

  test('ssr', async () => {
    const makeReq = login => fetch(url('/ssr' + (login ? '?login' : '')))
      .then(r => r.text())
      .then(h => /session-[0-9]+/.exec(h))
      .then(m => (m && m[0] ? m[0] : null))

    const a = await makeReq()
    const b = await makeReq(true)
    const c = await makeReq()
    const d = await makeReq(true)

    expect(a).toBeNull()
    expect(b).not.toBeNull()
    expect(c).toBeNull() // Important!
    expect(d).not.toBeNull()
    expect(b).not.toBe(d)
  })

  test('ssr no brotli', async () => {
    const makeReq = login => fetch(url('/ssr' + (login ? '?login' : '')))
      .then(r => r.text())
      .then(h => /encoding-\$(.*)\$/.exec(h))
      .then(m => (m && m[1] ? m[1] : null))

    const result = await makeReq()

    expect(result).toBe('gzip, deflate')
  })

  test('instance', async () => {
    const html = await fetch(url('/instance')).then(r => r.text())

    expect(html).toContain('prefixUrl:https://jsonplaceholder.typicode.com/')
    expect(html).toContain('testing:oui')
  })
})
