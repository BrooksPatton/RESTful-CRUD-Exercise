var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
var queries = require('../db/query')
// Create the route for get all
router.get('/', (req, res) => {
  queries.getAll()
    .then((cartoons) => {
      res.json(cartoons)
    })
})

// Create the route for get one
router.get('/:id', (req, res) => {
  queries.getOne(req.params.id)
    .then((cartoon) => {
      res.json(cartoon)
    })
})

// Create the route for creating an item
router.post('/', (req, res) => {
  queries.create(req.body)
    .then((cartoon) => {
      res.json(cartoon)
    })
})

// Create the route for updating
router.put('/', (req, res) => {
  queries.update(req.body.id, req.body)
    .then((cartoon) => {
      res.json(cartoon)
    })
})

// Route for deleting an item
router.delete('/', (req, res) => {
  queries.remove(req.body.id)
    .then((cartoon) => {
      res.json(cartoon)
    })
})


module.exports = router;
