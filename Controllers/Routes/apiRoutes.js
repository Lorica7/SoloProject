var db = require("../../Models");

const axios = require("axios");

const gKey = process.env.GOOGLE_KEY

const cseCode = process.env.GOOGLE_CSE_KEY


module.exports = function (app) {

  //Getting Stored Data

  app.get("/api/garments", function (req, res) {
    db.Garment.findAll({})
      .then((results) => { res.json(results); });
  });

  app.get("/api/user/:email", function (req, res) {
    db.User.findAll({
      where: {
        email: req.params.email
      }
    }).then((results) => { res.json(results); });
  });


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

  app.get("/api/garments/kind", (req, res) => {
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

  // Retrieving Data

  app.post("/api/garments/search", function (req, res) {
    
    let cType = req.body.garments;
    let color = req.body.color;
    let size = req.body.size;
    console.log(cType)
    axios
      .get(`https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${cseCode}&q=${cType}&petite&${size}&${color}&exactTerms={petite?}&exactTerms={cse_thumbnail}`
      )
      .then(function (response) {
         console.log(response.data.items);
        let newData = response.data.items;
        res.json(newData)
      })
      .catch(function (error) {
        console.log(error);
      });
  })


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