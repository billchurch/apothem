'use strict'
// index.js
const config = require('config')
const Server = require('~/express/index.js')
const server = new Server(config)

server.listen()
