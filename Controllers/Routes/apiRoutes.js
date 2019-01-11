var db = require("../../Models");

const axios = require("axios");

const gKey = process.env.GOOGLE_KEY

const cseCode = process.env.GOOGLE_CSE_KEY


module.exports = function (app) {


  // ***********SIGN-IN ********

  // *********** C *************

  app.post("/api/user/:email", (req, res) => {

    let logging = {
      email: req.body.email,
    }

    db.User.findOne({
      where: {
        email: req.params.email,
        password: req.params.password
      }
    }).catch((error) => {
      res.json(error);
    })
      .then((logging) => {
        db.LogIn.create({
          email: logging.email,
        })
      })
      .then((results) => {
        res.json(results)
      })
        .catch((error) => {
          res.json(error);
        })

    })

  // ********GARMENT FETCHING***********

  // ************* R **************
  app.get("/api/garments", function (req, res) {
    db.Garment.findAll({})
      .then((results) => { res.json(results); });
  });

  app.get("/api/garments/label", (req, res) => {
    db.Garments.findAll({
      where: {
        label: {
          label: req.params.label
        }
      }
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

  // ******** EXTERNAL DATA FETCHING VIA AXIOS.GET *******
  // ******** Possibly  C, could be R ***************
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


  // ***** U ******* D *******

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


}


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

  //
