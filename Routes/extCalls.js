require("dotenv").config();

const router = require("express").Router();
const axios = require("axios");

var keys = require ('./config/keys.js')

 var webContext = webContext.api_key

 var gSearch = gSearch.key;

 var cseCode = gSearch.cseCode;


module.exports = function(app) {


app.get("api/search/:params1/:params2/:params3", function (req, res) {

        axios
            .get(`https://www.googleapis.com/customsearch/v1?key= ${gSearch}
            ?cx= ${cseCode} &q= ${{params: req.query}}
            +${{params: req.query}}
            +${{params: req.query}}`)
            .then(({ data: { res } }) => res.json(res))
            console.log(res)
            .catch(err => res.status(422).json(err));
 
    })
}

