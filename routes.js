'use strict'
const request = require('request')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.all('*', (req, res) => {
    let { webhook } = req.body

    console.log(JSON.stringify(req.headers))
    request(webhook).pipe(res)
  })
}
