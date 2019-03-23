import Vue from 'vue'
import './vuex'

interface NuxtHTTPInstance {
  $request<T = any>(config: any): Promise<T>
  $get<T = any>(url: string, config?: any): Promise<T>
  $delete<T = any>(url: string, config?: any): Promise<T>
  $head<T = any>(url: string, config?: any): Promise<T>
  $options<T = any>(url: string, config?: any): Promise<T>
  $post<T = any>(url: string, data?: any, config?: any): Promise<T>
  $put<T = any>(url: string, data?: any, config?: any): Promise<T>
  $patch<T = any>(url: string, data?: any, config?: any): Promise<T>

  setHeader(name: string, value?: string | false, scopes?: string | string[]): void
  setToken(token: string | false, type?: string, scopes?: string | string[]): void

  onRequest(callback: (config: any) => void): void
  onResponse<T = any>(callback: (response: any) => void): void
  onError(callback: (error: any) => void): void
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
