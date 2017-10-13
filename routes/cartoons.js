var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
var queries = require('../db/query');

// Create the route for get all
router.get("/", function (request,response,next) {
  queries.getAll().then(function(cartoons) {
    response.json(cartoons);
  });
});


// Create the route for get one
router.get("/:id", function (request,response,next) {
  queries.getOne(request.params.id).then(function(cartoons) {
    response.json(cartoons);
  });
});


// Create the route for creating an item//put data into the db

router.post("/", function (request,response,next) {
  queries.create(request.body).then(function(cartoons) {
    response.json(cartoons)
  });
});


// Create the route for updating
router.put("/:id", function (request, response, next) {
  queries.update(request.params.id, request.body).then(function(){
    response.json("updated")
  });
});


// Route for deleting an item
router.delete("/:id", function(request, response, next) {
  queries.remove(request.params.id).then(function() {
    response.json('deleted');
  });
});

module.exports = router;
