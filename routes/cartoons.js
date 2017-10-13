var express = require('express');
var router = express.Router();
const query = require('../db/query');

// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get("/", function(request, response, next) {
    query.getAll()
    .then(function(cartoon){
      console.log(cartoon);

        response.json(cartoon);
    });
  });
// Create the route for get one


// Create the route for creating an item


// Create the route for updating


// Route for deleting an item


module.exports = router;
