var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/housing'); // make semantic
var Housing = db.get('housing'); // make semantic
require('dotenv').load()

router.get('/', function(req, res) {  // INDEX
  Housing.find({}, function(err, housing) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(housing); // OK
  })
});  // tested

router.post('/', function(req, res) { // CREATE
  Housing.insert(req.body, function(err, house) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(house); // Created
  });
}) // tested

router.get('/new', function(req, res){ // NEW
  // goes to forms page for user to enter a new house
  // this route isn't needed if a href anchor is used to go to the forms page
});

router.get('/:id', function(req, res) { //SHOW
  Housing.findOne({_id: req.params.id}, function(err, house) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(house); // OK
  })
}) // tested

router.get('/:id/edit', function(req, res){ // EDIT (identical to SHOW route)
  Housing.findOne({_id: req.params.id}, function(err, house) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(house) // OK
  })
}); // tested

router.put('/:id', function(req, res) { // UPDATE
  Housing.findAndModify({_id: req.params.id}, req.body, function(err, house) {
    if (err) {
      throw err;
    }
    res.json(req.body);
  })
}) // tested

router.delete('/:id', function(req, res) { //DESTROY
  Housing.remove({_id: req.params.id}, function(err, house){
    if (err) {
      throw err;
    }
    res.status(204).json(house); // No Content
  });
}); // tested

module.exports = router;
