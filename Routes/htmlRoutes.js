
let path = require("path");
const expVal = require ('express-validator');
const passport = require('passport');

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "../Views/index"));
  });

  app.get('/', function (req, res) {
  console.log(req.user)
  console.log(req.isAuthenticated())
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/register"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/results.html"));
  });


  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/search.html"));
  });


  app.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "../Views/user.html"));
  });



};