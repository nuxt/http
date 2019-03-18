export default function ({ $http, redirect }) {
  $http.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('SPY: ' + config.url)

    $http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
  })
}
