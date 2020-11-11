'use strict'
// express/controllers/radiusController.js

const config = require('config')
const radiusConfig = config.get('radius.server')
// const ts = () => new Date().toISOString()

// Gets all users from radius
exports.helloworld = function (req, res) {
  res.json(radiusConfig)
}

// just return the config for now
/* const handleError = function handleError (req, res, statusCode, error) {
  res.status(statusCode)
    .json({ error: error })
  console.error(`${ts()} - ERROR - ${req.ip} ${req.method} ${req.url} - ${JSON.stringify(error)}`)
} */
