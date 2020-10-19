const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const seed = require('./seeders/seed.js');
const Exercise = require("./models/Exercise.js");

const PORT = process.env.PORT || 3000;

// Load models
//require('./seeders/seed.js')
const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow server to use public file
app.use(express.static("public"));

//add routes
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true ,
    useUnifiedTopology: true 
});

    // Exercise.create({type:'deadlift'})
    //   .then(dbExercise => {
    //     res.json(dbExercise);
    //   })
    //   .catch(err => {
    //     res.json(err);
    //   });
seed();


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });