const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//add routes
require("./routes/html-routes.js")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { 
    useNewUrlParser: true 
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });