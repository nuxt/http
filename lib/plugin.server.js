import _fetch from 'node-fetch'
import { AbortController as _AbortController } from 'abort-controller'
import { ReadableStream as _ReadableStream } from 'web-streams-polyfill/ponyfill/es2018'

const TEN_MEGABYTES = 1000 * 1000 * 10

if (!global.fetch) {
  global.fetch = (url, options) => _fetch(url, { highWaterMark: TEN_MEGABYTES, ...options })
}

if (!global.Headers) {
  global.Headers = _fetch.Headers
}

if (!global.Request) {
  global.Request = _fetch.Request
}

if (!global.Response) {
  global.Response = _fetch.Response
}

if (!global.AbortController) {
  global.AbortController = _AbortController
}

if (!global.ReadableStream) {
  try {
    global.ReadableStream = _ReadableStream
  } catch (_) { }
}
