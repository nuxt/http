module.exports = {
  path: '/test_api',
  handler (req, res) {
    if (req.url === '/error') {
      res.statusCode = 418
      res.end('I\'m a teapot')
    }

    res.end(JSON.stringify({
      url: req.url,
      method: req.method
    }))
  }
}
