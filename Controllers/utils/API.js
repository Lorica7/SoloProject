const config = require("dotenv").config();
const axios = require("axios");
const keys = require("../../keys");


const webKey = keys.webKey

const gKey = keys.gSearch.key

const cseCode = keys.gSearch.cseCode


function searchGarment (req, res) {

        axios
            .get(`https://www.googleapis.com/customsearch/v1?key= ${gKey}
            ?cx= ${cseCode} &q= ${{ params: req.data.params }}
            +${{ params: req.data.params2 }}
            +${{ params: req.data.params3 }}`)
            .then(({ data: { res } }) => res.json(res))
        console.log(res)
            .catch(err => res.status(422).json(err));

}

module.exports.searchGarment = searchGarment;