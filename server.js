
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Models");
const expVal = require ('express-validator');
const passport = require('passport');
const config = require("dotenv").config();
let path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const axios = require("axios");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/public", express.static(__dirname + "/Public"));

app.use(expVal());

require('dotenv').config();

const session = require('express-session');

app.use(session({
  secret: 'vlskeuhcfdeuh',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

// app.use(routes);
// const routes = require("./Controllers");

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./Controllers/Routes/apiRoutes")(app);
require("./Controllers/Routes/htmlRoutes")(app);
//

require("./Controllers/verify")(app);



var syncOptions = { force: false };

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