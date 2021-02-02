import Vue from 'vue'
import ky, { ResponsePromise, Options, BeforeRequestHook, BeforeRetryHook, AfterResponseHook } from 'ky'
import './vuex'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type RequestBody = string | number | boolean | null | object | BodyInit

interface NuxtHTTPInstance {
	/**
	 * Fetches the `url` with the option `{method: 'get'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	get(url: Request | URL | string, options?: Omit<Options, 'body'>): ResponsePromise;

	/**
	 * Fetches the `url` with the option `{method: 'post'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	post(url: Request | URL | string, body?: RequestBody, options?: Options): ResponsePromise;

	/**
	 * Fetches the `url` with the option `{method: 'put'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	put(url: Request | URL | string, body?: RequestBody, options?: Options): ResponsePromise;

	/**
	 * Fetches the `url` with the option `{method: 'patch'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	patch(url: Request | URL | string, body?: RequestBody, options?: Options): ResponsePromise;

	/**
	 * Fetches the `url` with the option `{method: 'head'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	head(url: Request | URL | string, options?: Omit<Options, 'body'>): ResponsePromise;

	/**
	 * Fetches the `url` with the option `{method: 'delete'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise with `Body` method added.
	 */
	delete(url: Request | URL | string, options?: Options): ResponsePromise;

  /**
 * Fetches the `url` with the option `{method: 'get'}`.
 *
 * @param url - `Request` object, `URL` object, or URL string.
 * @returns Promise that resolves to JSON parsed value.
 */
	$get<T = unknown>(url: Request | URL | string, options?: Omit<Options, 'body'>): Promise<T>;

	/**
	 * Fetches the `url` with the option `{method: 'post'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
	$post<T = unknown>(url: Request | URL | string, body?: RequestBody, options?: Options): Promise<T>;

	/**
	 * Fetches the `url` with the option `{method: 'put'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
	$put<T = unknown>(url: Request | URL | string, body?: RequestBody, options?: Options): Promise<T>;

	/**
	 * Fetches the `url` with the option `{method: 'patch'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
	$patch<T = unknown>(url: Request | URL | string, body?: RequestBody, options?: Options): Promise<T>;

	/**
	 * Fetches the `url` with the option `{method: 'head'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
	$head<T = unknown>(url: Request | URL | string, options?: Omit<Options, 'body'>): Promise<T>;

	/**
	 * Fetches the `url` with the option `{method: 'delete'}`.
	 *
	 * @param url - `Request` object, `URL` object, or URL string.
	 * @returns Promise that resolves to JSON parsed value.
	 */
	$delete<T = unknown>(url: Request | URL | string, options?: Options): Promise<T>;


  /**
   * Get the baseURL value.
   * @returns string - the base URL value
   */
  getBaseURL(): string

  /**
   * Set the baseURL for all subsequent requests.
   * @param baseURL - the base URL (e.g. `https://myapi.com/`)
   */
  setBaseURL(baseURL: string): void

  /**
   * Set a header on all subsequent requests.
   * @param name - Header name.
   * @param value - Header value.
   */
  setHeader(name: string, value?: string | false): void

  /**
   * Set `Authorization` header on all subsequent requests.
   * @param name - Header name.
   * @param value - Header value.
   */
  setToken(token: string | false, type?: string): void


  /**
   * Set a hook on `beforeRequest` (Before request is sent)
   *
   * This hook enables you to globally modify the requests right before it is sent. It will make no further changes to the request after this. The hook function receives the normalized options as the first argument. You could, for example, modify `options.headers` here.
   */
  onRequest(hook: BeforeRequestHook): void

  /**
   * Set a hook on `beforeRetry` (Before request is sent)
   *
   * This hook enables you to modify the request right before retry. It will make no further changes to the request after this. The hook function receives the normalized input and options, an error instance and the retry count as arguments. You could, for example, modify `options.headers` here.
   */
  onRetry(hook: BeforeRetryHook): void

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
  onError(hook: (error: ky.HTTPError) => void): void

  /**
   * If you need to create your own ky instance which based on $http defaults, you can use the create(options) method.
   */
  create(options: Partial<Options>): NuxtHTTPInstance
}

declare module '@nuxt/vue-app' {
  interface Context {
    $http: NuxtHTTPInstance
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $http: NuxtHTTPInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: NuxtHTTPInstance
  }
}
