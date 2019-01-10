
const axios = require("axios");
const keys = require("../../Config/keys");
// require('dotenv').config();

// const webKey = keys.webKey

const gKey = keys.gkey

const cseCode = keys.cseCode


function searchGarment(allParams) {
  
   let cType = allParams.garments 
   console.log(cType);
  
   axios
        .get(`https://www.googleapis.com/customsearch/v1?key=${gKey}&cx=${cseCode}&q=${cType}`
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

