const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

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
app.use(require("./routes/api-routes.js"))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true ,
    useUnifiedTopology: true 
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });