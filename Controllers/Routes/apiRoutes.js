var db = require("../../Models");

module.exports = function(app) {

  //Getting Stored Data
  
  app.get("/api/garments", function(req, res) {
    db.Garment.findAll({})
    .then((results) => {res.json(results);});
  });

  app.get("/api/user/:email", function(req, res) {
    db.User.findAll({
      where: {
        email: req.params.email
      }
    }).then((results) => {res.json(results);});
  });

  // app.get("/api/user/:email", function (req, res) {
  //   db.User.findAll({
  //       where: {
  //           email: req.params.email
  //       }
  //   }) 
  //       .then(email => {
  //           if (!email) {
  //               console.log(error)
  //           } else {
  //           } res.redirect('/search');
           
  //       });
  //     })

  app.get('api/heroes'), function (req, res){
    res.json(heroes.json)
  }


  app.get("/api/garments/color", (req, res) => {
    db.Garments.findAll({
      where: {
        color: {
          color: req.params.color
        }
      }
    }).then((results) => {
      res.json(results);
    });
  });

  
  app.get("/api/garments/size", (req, res) => {
    db.Garment.findAll({
      where: {
        size: {
          size: req.params.size
        }
      },
    }).then((results) => {
      res.json(results);
    });
  });

  app.get("/api/garments/kind", (req, res)  => {
    db.Garment.findAll({
      where: {
        kind: {
          kind: req.params.kind
        }
      },
    }).then((results) => {
      res.json(results);
    });
  });

  // Changing Data

  app.put("/api/update", (req, res) => {
    console.log("User Data:");
    console.log(req.body);
    db.User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      size: req.body.size,
      type: req.body.type,
      password: req.body.passwordNew,
    },
    {
      where: {
        email: req.body.email 
      }, 
  }).then((results) => {
      res.json(results);
    });
  });


  app.delete("/api/delete", (req, res) => {
    console.log("Garment Data:");
    console.log(req.body);
    db.Garments.destroy({
      where: {
        id: req.body.id
      }
    }).then((results) => {
      res.json(results);
    });
  });


};