require("dotenv").config();

const router = require("express").Router();
const axios = require("axios");



var webContext = process.env.WEBCONTEXT_API_KEY

var gSearch = process.env.GOOGLE_KEY

var cseCode = process.env.GOOGLE_CSE_KEY


module.exports = function (app) {


    app.get("api/search",

        axios
            .get(`https://www.googleapis.com/customsearch/v1?key= ${gSearch}
            ?cx= ${cseCode} &q= ${{ params: req.data.params }}
            +${{ params: req.data.params2 }}
            +${{ params: req.data.params3 }}`)
            .then(({ data: { res } }) => res.json(res))
        console.log(res)
            .catch(err => res.status(422).json(err));

    }));
}

