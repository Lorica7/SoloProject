console.log('this is loaded');

require("dotenv").config();

module.exports = function(app) {

module.exports.webContext = {
  api_key: process.env.WEBCONTEXT_API_KEY, 
};


module.exports.users_db = {
    username: process.env.db_username,
    password: process.env.db_password
}

module.exports.gSearch ={
  key: process.env.GOOGLE_KEY,
  cseCode: process.env.GOOGLE_CSE_KEY
}
}