// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Car = require('../models/car')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.post('/cars/:id/comments', (req, res) => {
    const carId = req.params.id
    req.body.email = req.body.user.email
    req.body.owner = req.body.user._id
    console.log(req.body.user._id, carId)
    Car.findById(carId)
        .then(car => {
            console.log('sent', car)
            car.comments.push(req.body)
            return car.save()
        })
        .then(car => {
            console.log('hi')
            res.redirect(`/cars/${carId}`)
        })
        .catch(err => {
            res.json(err)
            console.log('errors', err)
        })
})


// SHOW
// router.get('/cars/:id', requireToken, (req, res, next) => {
// 	// req.params.id will be set based on the `:id` in the route
// 	Example.findById(req.params.id)
// 		.then(handle404)
// 		// if `findById` is succesful, respond with 200 and "example" JSON
// 		.then((example) => res.status(200).json({ example: example.toObject() }))
// 		// if an error occurs, pass it to the handler
// 		.catch(next)
// })



module.exports = router