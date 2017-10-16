var express = require('express');
var router = express.Router();
var queries = require('../db/query')
// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get('/', function(request, response) {
  queries.getAll()
    .then(function(cartoon) {
      response.json(cartoon)
    })
})

// Create the route for get one
router.get('/:id', function(request, response) {
  queries.getOne(request.params.id)
    .then(function(cartoon) {
      response.json(cartoon)
    })
})


// Create the route for creating an item
router.post('/', function(request, response) {
  queries.create(request.body)
    .then(function(cartoon) {
      response.json(cartoon)
    })
})


// Create the route for updating
router.put('/', function(request, response) {
  queries.update(request.body.id, request.body)
    .then(function(cartoon) {
      response.send('updated')
    })
})


// Route for deleting an item
router.delete('/', function(request, response) {
  queries.remove(request.body.id)
    .then(function(cartoon) {
      response.send('deleted')
    })
})


module.exports = router;
