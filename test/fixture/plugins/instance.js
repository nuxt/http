export default function ({ $http, env }, inject) {
  // Create a custom HTTP instance
  const $api = $http.create({
    // See https://github.com/sindresorhus/ky#options
  })

  // Set baseURL to something different
  $api.setBaseURL('https://jsonplaceholder.typicode.com/')
  $api.setHeader('testing', 'oui')

  // Inject to context as $github
  inject('api', $api)
}
