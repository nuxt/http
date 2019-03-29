import Vue from 'vue'
import { ResponsePromise, Options, BeforeRequestHook, AfterResponseHook, HTTPError } from 'ky'
import './vuex'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type JSONObject = { [key: string]: JSONValue };
interface JSONArray extends Array<JSONValue> { }
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface OptionsWithoutBody extends Omit<Options, 'body'> {
  method?: 'get' | 'head'
}

interface OptionsWithBody extends Options {
  method?: 'post' | 'put' | 'delete'
}

interface NuxtHTTPInstance {
	/**
	 * Fetches the `input` URL with the option `{method: 'get'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  get(input: Request | URL | string, options?: Omit<Options, 'body'>): ResponsePromise;

	/**
	 * Fetches the `input` URL with the option `{method: 'post'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  post(input: Request | URL | string, options?: Options): ResponsePromise;

	/**
	 * Fetches the `input` URL with the option `{method: 'put'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  put(input: Request | URL | string, options?: Options): ResponsePromise;

	/**
	 * Fetches the `input` URL with the option `{method: 'patch'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  patch(input: Request | URL | string, options?: Options): ResponsePromise;

	/**
	 * Fetches the `input` URL with the option `{method: 'head'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  head(input: Request | URL | string, options?: Omit<Options, 'body'>): ResponsePromise;

	/**
	 * Fetches the `input` URL with the option `{method: 'delete'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
  delete(input: Request | URL | string, options?: Options): ResponsePromise;

  /**
 * Fetches the `input` URL with the option `{method: 'get'}`.
 *
 * @param input - `Request` object, `URL` object, or URL string.
 * @returns Promise that resolves to JSON parsed value.
 */
  $get<T= JSONValue>(input: Request | URL | string, options?: Omit<Options, 'body'>): Promise<T>;

	/**
	 * Fetches the `input` URL with the option `{method: 'post'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
  $post<T = JSONValue>(input: Request | URL | string, options?: Options): Promise<T>;

	/**
	 * Fetches the `input` URL with the option `{method: 'put'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
  $put<T = JSONValue>(input: Request | URL | string, options?: Options): Promise<T>;

	/**
	 * Fetches the `input` URL with the option `{method: 'patch'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
  $patch<T = JSONValue>(input: Request | URL | string, options?: Options): Promise<T>;

	/**
	 * Fetches the `input` URL with the option `{method: 'head'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
  $head<T = JSONValue>(input: Request | URL | string, options?: Omit<Options, 'body'>): Promise<T>;

	/**
	 * Fetches the `input` URL with the option `{method: 'delete'}`.
	 *
	 * @param input - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
  $delete<T = JSONValue>(input: Request | URL | string, options?: Options): Promise<T>;


  /**
   * Set a header on all subsequent requests.
   * @param name - Header name.
   * @param value - Heade value.
   */
  setHeader(name: string, value?: string | false): void

  /**
   * Set `Authorization` header on all subsequent requests.
   * @param name - Header name.
   * @param value - Heade value.
   */
  setToken(token: string | false, type?: string): void


  /**
   * Set a hook on `beforeRequest` (Before request is sent)
   *
   * This hook enables you to globally modify the requests right before it is sent. It will make no further changes to the request after this. The hook function receives the normalized options as the first argument. You could, for example, modify `options.headers` here.
   */
  onRequest(hook: BeforeRequestHook): void

  /**
   * Set a hook on `afterResponse` (After the response is received)
   *
   * This hook enables you to globally read and optionally modify the responses. The return value of the hook function will be used as the response object if it's an instance of [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
   */
  onResponse(hook: AfterResponseHook): void

  /**
   * Set a hook on `onError` (When request failed)
   *
   * This hook enables you to globally handle request errors.
   */
  onError(hook: (HTTPError) => void): void
}

declare module '@nuxt/vue-app' {
  interface Context {
    $http: NuxtHTTPInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: NuxtHTTPInstance
  }
}
