var express = require('express');
var router = express.Router();

// Bring in the queries object that has all of the db query functions
const query = require('../db/query');

// Create the route for get all
router.get("/", function(request, response, next) {
    query.getAll()
    .then(function(cartoon){
      response.json(cartoon);
    });
  });
// Create the route for get one
router.get("/:id", function(request, response, next) {
    query.getOne(request.params.id)
    .then(function(cartoon){
      response.json(cartoon);
    });
  });

// Create the route for creating an item
router.post('/', function(request, response, next) {
  query.create(request.body)
  .then(function(cartoon) {
    response.json(cartoon)
  })
})

// Create the route for updating
router.put('/', function(request, response, next) {
  query.update(request.body.id, request.body)
  .then(function(cartoon) {
    response.send('updated')
  })
})

// Route for deleting an item
router.delete('/', function(request, response, next) {
  query.remove(request.body.id)
  .then(function(cartoon) {
    response.json(cartoon)
  })
})

module.exports = router;
