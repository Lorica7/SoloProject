
let path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/index.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/register.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/results.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/search.html"));
  });

  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../Views/user.html"));
  });


};