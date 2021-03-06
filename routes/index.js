var express = require('express')
var router = express.Router()
var passport = require('passport')

router.use('/authenticate', require('./authenticate'))

router.use('*', passport.authenticate(['jwt'], { session: false }), function (req, res, next) {
  next()
})

router.use('/user', require('./user'))

module.exports = router
