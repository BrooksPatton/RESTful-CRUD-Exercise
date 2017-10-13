var express = require('express');
var router = express.Router();

// Bring in the queries object that has all of the db query functions
const queries = require('../db/query')

// Create the route for get all
router.get('/', (req, res) => {
  queries.getAll()
  .then(function(cartoon){
    res.json(cartoon)
  })
})

// Create the route for get one
router.get('/:id', (req, res) => {
  queries.getOne(req.params.id)
  .then(function(cartoon){
    res.json(cartoon)
  })
})

// Create the route for creating an item
router.post('/', (req, res) => {
  queries.create(cartoon)
  .then(function(cartoon) {
      res.json(cartoon)
  })
})

// Create the route for updating
router.put('/:id', (req, res) => {
  queries.update(req.params.id, cartoon)
  .then(function(cartoon) {
    res.send('updated')
  })
})

// Route for deleting an item
router.delete('/:id', (req, res) => {
  queries.remove(req.params.id)
  .then(function(cartoon){
    res.send('deleted')
  })
})


module.exports = router;
