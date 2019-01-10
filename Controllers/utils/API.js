const config = require("dotenv").config();
const axios = require("axios");
const keys = require("../../Config/keys");


const webKey = keys.webKey

const gKey = keys.gSearch.key

const cseCode = keys.gSearch.cseCode


function searchGarment(allParams) {
    console.log(gKey, cseCode)
    axios
        .get(`https://www.googleapis.com/customsearch/v1?key=${gKey}?cx=${cseCode}&q=${allParams}`
        )
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

}

module.exports.searchGarment = searchGarment;

// +${{ params: allParams.params2 }}
// +${{ params: allParams.params3 }}`

