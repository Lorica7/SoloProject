
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Models");
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

app.use("/public", express.static(__dirname + "/Public"));
app.use(cors());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/verify")(app);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// if (!config.get('jwtPrivateKey')) {
//   console.error('FATAL ERROR: jwtPrivateKey is not defined.');
//   process.exit(1);
// }

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      `Listening on Port ${PORT}`
    
    );
  });
});


module.exports = app;