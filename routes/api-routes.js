const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose')
const { Workout, Exercise } = require('../models/index');


router.get('/api/workouts', (req,res) =>{
    Workout.find({})
    .sort({ day: 1})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).send(err);
      });
});

router.get('/api/workouts/range', (req,res) =>{
    //console.log(req.params)
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout)
      })
      .catch(err => {
        res.status(400).send(err);
      });
      

});


module.exports = router;