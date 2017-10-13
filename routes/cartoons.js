var express = require('express');
var router = express.Router();
var queries = require('../db/query')
// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get('/', function(request, response, next) {
  queries.getAll()
    .then(function(cartoon) {
      response.json(cartoon)
    })
})

// Create the route for get one
router.get('/:id', function(request, response, next) {
  queries.getOne(request.params.id)
    .then(function(cartoon) {
      response.json(cartoon)
    })
})


// Create the route for creating an item
router.post('/', function(request, response, next) {
  queries.create(cartoon)
    .then(function(cartoon) {
      response.json(cartoon)
    })
})


// Create the route for updating
router.put('/:id', function(request, response, next) {
  queries.update(request.params.id)
    .then(function(cartoon) {
      response.send(cartoon)
    })
})


// Route for deleting an item
router.delete('/:id', function(request, response, next) {
  queries.remove(request.params.id)
    .then(function(cartoon) {
      response.send(cartoon)
    })
})


module.exports = router;
