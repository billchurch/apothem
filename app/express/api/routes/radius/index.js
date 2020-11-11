'use strict'
// express/api/routes/radius/index.js
/** Express routes for RADIUS tasks
 * @module api/routes/radius
 * @requires express
 * @requires radiusTask
 */

/**
 * express module
 * @const
 */
const express = require('express')

/**
 * Express router
 * @type {object}
 * @const
 * @namespace radiusRouter
 */
const radiusRouter = express.Router()

/**
 * radius Tasks
 * @type {object}
 * @const
 */
const radiusTask = require('~/express/api/controllers/radiusController')

// Route returning list of users in JSON format from radius
/**
 * Route to return all users.
 * @name get/radius/helloworld
 * @function
 * @memberof module:api/routes/radiusroutes~radiusRouter
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
radiusRouter.get('/helloworld', radiusTask.helloworld)

module.exports = radiusRouter
