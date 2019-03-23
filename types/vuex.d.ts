import { NuxtHTTPInstance } from '.'

declare module 'vuex' {
  interface Store<S> {
    $http: NuxtHTTPInstance,
  }
}
