
let path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/", (req, res)=> {
  //   res.sendFile(path.join(__dirname, "../Views/index.handlebars"));
  // });

  app.get('/', (req, res) => res.render('index', { layout: 'main' }));

  // app.get("/register", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../Views/register.handlebars"));
  // });

  app.get('/register', (req, res) => res.render('register', { layout: 'main' }));

  // app.get("/results", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../Views/results.handlebars"));
  // });

  app.get('/results', (req, res) => res.render('results', { layout: 'landing' }));

  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../Views/search.handlebars"));
  // });

  app.get('/search', (req, res) => res.render('search', { layout: 'landing' }));

  // app.get("/user", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../Views/user.handlebars"));
  // });


  app.get('/user', (req, res) => res.render('user', { layout: 'landing' }));

  // app.get("/errors", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../Views/errors.handlebars"));
  // });

  app.get('/errors', (req, res) => res.render('errors', { layout: 'landing' }));

};