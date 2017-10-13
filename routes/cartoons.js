const express = require('express');
const router = express.Router();
const queries = require('../db/query')

// Create the route for get all
router.get('/', function(request, response, next) {
  queries.getAll()
  .then(function(cartoon){
      response.json(cartoon);
  });
});

// Create the route for get one
router.get('/:id', function(request, response, next) {
  queries.getOne(request.params.id)
  .then(function(cartoon) {
    response.json(cartoon);
  });
});

// Create the route for creating an item
router.post('/', function(request, response, next) {
  queries.create(request.body)
  .then(function(id) {
    response.json({cartoon_id: id[0]});
  })
})

// Create the route for updating
router.put('/', function(request, response, next) {
  queries.update(request.body.id, request.body).then(function() {
    response.send('updated')
  })
})

router.delete('/', function(request, response, next) {
  queries.remove(request.body.id)
  .then(function() {
    response.send('deleted')
  })
})



module.exports = router;
