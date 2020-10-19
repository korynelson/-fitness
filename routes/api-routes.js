const router = require('express').Router();
const db = require("../models/index");
const path = require('path');
const { Workout } = require('../models/index');

router.get('/api/workouts', (req,res) =>{
    Workout.find({})
    .sort({ day: 1})
    .then(dbWorkout => {
        res.send(dbWorkout);
      })
      .catch(err => {
        res.status(400).send(err);
      });
});

router.get('/api/workouts/range', (req,res) =>{
    Workout.find()
    .then(dbWorkout => {
        res.send(dbWorkout);
      })
      .catch(err => {
        res.status(400).send(err);
      });
});

module.exports = router;