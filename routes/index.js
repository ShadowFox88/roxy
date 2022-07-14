var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET home page. */
router.all('/', async function(req, res, next) {
  let { webhook, ...remainder } = req.body;
  let body = JSON.stringify(remainder);
  let headers = req.headers;

  delete headers["host"];
  delete headers["user-agent"];

  console.log(headers);

  let response = await fetch(webhook, {
    method: req.method,
    body,
    headers
  });
  let payload = await response.text();

  res.status(response.status)
    .send(payload);
});

module.exports = router;
