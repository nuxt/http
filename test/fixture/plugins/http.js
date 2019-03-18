export default function ({ $http, redirect }) {
  $http.setHeader('xsrfHeaderName', 'X-CSRF-TOKEN')

  $http.onRequest((options) => {
    // eslint-disable-next-line no-console
    console.log('Request:', JSON.stringify(options))
  })
}
