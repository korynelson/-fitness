const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise"
  }
]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;