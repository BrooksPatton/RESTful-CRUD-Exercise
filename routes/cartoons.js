const express = require('express');
const router = express.Router();
const query = require("../db/query");// Bring in the queries object that has all of the db query functions

// Create the route for get all
router.get("/", (request, response, next) => {
    query.getAll()
    .then(cartoon => {
        response.json(cartoon);
    });
});

// Create the route for get one
router.get("/:id", (request, response, next) => {
    query.getOne(3)
    .then((cartoon) => {
        response.json(cartoon);
    });
});

// Create the route for creating an item
router.post("/", (request, response, next) => {
    query.create('Daffy Duck', '1937', 'Warner Bros.')
    .then((cartoon) => {
        response.json(cartoon);
    });
});

// Create the route for updating
router.patch("/", (request, response, next) => {
    query.update(4, 'Daffy Duck', '1937','Warner Brothers')
    .then((cartoon) => {
        response.json(cartoon);
    });
});

// Route for deleting an item
router.delete("/", (request, response, next) => {
    query.remove(8)
    .then((cartoon) => {
        response.json(cartoon);
    });
});

module.exports = router;
