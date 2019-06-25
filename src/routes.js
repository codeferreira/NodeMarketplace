const express = require('express')
const routes = express.Router()

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
