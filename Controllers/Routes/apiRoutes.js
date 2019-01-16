var db = require("../../Models");
const axios = require("axios");
const bcrypt = require('bcrypt')
const gKey = process.env.GOOGLE_KEY
const cseCode = process.env.GOOGLE_CSE_KEY
module.exports = function (app) {
  // ***********SIGN-IN ********

  app.post("/api/user/:email", (req, res) => {

    let logging = {
      email: req.body.email,
    }
    db.User.findAll({
      where: {
        email: req.params.email,
      }
    }).then(
      db.LogIn.create(logging)
    )
      .then((results) => {
        res.json(results)
      })
      .catch((error) => {
        res.json(error);
      })
  })



  // ********GARMENT FETCHING***********
  app.get("/api/garments", function (req, res) {
    db.Garment.findAll({})
      .then((results) => { res.json(results); });
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

  // ******** EXTERNAL DATA FETCHING VIA AXIOS.GET *******

  app.post("/api/garments/search", function (req, res) {

    let cType = req.body.garments;
    let color = req.body.color;
    let option = req.body.option;
    console.log(cType)
    axios
      .get(`https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${cseCode}&q=${cType}&petite}&${color}&${option}&exactTerms={petite?}&exactTerms={cse_thumbnail}`
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

  //*****************Saving Results *******************/

  app.post("/api/garments/save", (req, res)=>{

    db.Garment.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  //********UPDATE******* */

  app.put("/api/update", (req, res) => {
    console.log("User Data:");
    const userInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      size: req.body.size,
      password: req.body.passwordNew,
      type: req.body.type
    }
    bcrypt.hash(req.body.password, 10, (error, hash) => {
      userInfo.password = hash
      db.User.update({
        userInfo
      },
        {
          where: {
            email: req.body.email
          },
        }).then((results) => {
          console.log(results)
          res.json(results);
        }).catch(error)
      res.json(error)
    })

  });

  ////////////////////////////

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
}

