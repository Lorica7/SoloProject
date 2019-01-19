// Routes
// =============================================================
let path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "../../Views/index.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../../Views/register.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../../Views/results.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../../Views/search.html"));
  });

  app.get("/clothes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../Views/clothes.html"));
  });

  app.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Views/user.html"));
  });

};