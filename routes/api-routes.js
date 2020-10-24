const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose')
const Workout = require('../models/Workout');


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

// Put path to update current workout with new exercise
router.put('/api/workouts/:id', (req,res) => {
  // console.log(req.params);

  Workout.findById(req.params.id, (err, workoutById) => {
    // find all exercises related to the current workout
    const objExercise = workoutById.exercises;

    console.log(workoutById.totalDuration)
    if(workoutById.totalDuration !==0){
      console.log('adding exercise duration to total')
      workoutById.totalDuration = workoutById.totalDuration + req.body.duration;

    }
    else{
      console.log('duration doesn exist yet...')
      workoutById.totalDuration = req.body.duration;
    }
    objExercise.push(req.body)

    // Save to db
    try {
      const updated = workoutById.save();
      return res.status(200).send(updated)
    }
    catch (err) {
      return res.status(500).send(err)
    }
  });

});

// POST path to create new workout
router.post("/api/workouts", (req,res) => {
  console.log(req.params);
  const newWorkout = new Workout();
  try{
    const updated = newWorkout.save();
    return res.status(200).send(updated)
  }
  catch (err) {
    return res.status(500).send(err)
  }
  });


module.exports = router;