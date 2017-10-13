const express = require('express');
const router = express.Router();

// Bring in the queries object that has all of the db query functions
const query = require("../db/query");

// Create the route for get all
router.get("/", (request, response, next) => {
    query.getAll()
    .then(cartoons => {
        response.json(cartoons);
    });
});

// Create the route for get one
router.get("/:id", (request, response, next) => {
    query.getOne(request.params.id)
    .then(cartoons => {
        response.json(cartoons);
    });
});

// Create the route for creating an item


// Create the route for updating


// Route for deleting an item


module.exports = router;
