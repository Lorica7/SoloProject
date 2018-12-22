
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Models");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const expVal = require ('express-validator');
const passport = require('passport');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(expVal());

require('dotenv').config();

app.use("/public", express.static(__dirname + "/Public"));

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'hbs');

app.use(session({
  secret: 'vlskeuhcfdeuh',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/verify")(app);

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