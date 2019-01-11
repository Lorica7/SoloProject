
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Models");
const expVal = require ('express-validator');
const passport = require('passport');
const dotenv = require("dotenv").config();
let path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const axios = require("axios");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();

app.use("/public", express.static(__dirname + "/Public"));

app.use(expVal());



const session = require('express-session');

app.use(session({
  secret: 'vlskeuhcfdeuh',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));



app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./Controllers/Routes/apiRoutes")(app);
require("./Controllers/Routes/htmlRoutes")(app);
require("./Controllers/Routes/verify")(app);



var syncOptions = { force: true };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      `Listening on Port ${PORT}`
    
    );
  });
});


module.exports = app;