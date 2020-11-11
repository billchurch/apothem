'use strict'
// express/index.js
const express = require('express')
const cors = require('cors')
const radiusRouter = require('./api/routes/radius')
var favicon = require('serve-favicon')
const ts = () => new Date().toISOString()

class appServer {
  constructor (config) {
    this.config = config
  }

  listen () {
    this.app = express()
    const port = this.config.app.server.port
    this.app.listen(port)
    console.log('apothem Server started on: ' + port)

    this.app.use(cors())

    this.app.use(favicon('./favicon.ico'))

    // log time - ip method url for debugging
    this.app.use(function (req, res, next) {
      console.log(`${ts()} - ${req.ip} ${req.method} ${req.url}`)
      next()
    })

    this.app.use('/apothem/radius', radiusRouter)

    this.app.use(function (req, res) {
      res.status(404).json({ url: req.originalUrl + ' not found' })
      console.log(`${ts()} - ERROR 404 - ${req.ip} ${req.method} ${req.url}`)
    })
  }
}

module.exports = appServer