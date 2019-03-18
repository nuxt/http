export default function ({ $http, redirect }) {
  $http.setHeader('xsrfHeaderName', 'X-CSRF-TOKEN')

  $http.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('SPY: ' + config.url)
  })
}
