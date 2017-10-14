var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
const queries = require("../db/query");

// Create the route for get all
router.get("/", function(req, res, next) {
  queries.getAll()
    .then(function(data){
      res.json(data)
    }).catch(function(err){
      next(err)
    })
});

// Create the route for get one
router.get("/:id", function(req, res, next) {
  queries.getOne(req.params.id)
    .then(function(data){
      res.json(data)
    }).catch(function(err){
      next(err)
    })
})

// Create the route for creating an item
router.post("/:title/:year/:network",function(req, res, next){
  queries.create(req.params.title,req.params.year,req.params.network)
    .then(function(data){
      res.json(data)
    }).catch(function(err){
      next(err)
    })
})

// Create the route for updating
router.put("/:year/:network/:id",function(req, res, next){
  queries.update(req.params.id, req.params.year,req.params.network)
    .then(function(data){
      res.json(data)
    }).catch(function(err){
      next(err)
    })
})

// Route for deleting an item
router.delete("/:title",function(req,res,next){
  queries.remove(req.params.title)
    .then(function(data){
      res.json(data)
    }).catch(function(err){
      next(err)
    })
})

module.exports = router;
