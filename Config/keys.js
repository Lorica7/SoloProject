console.log('this is loaded');

require("dotenv").config();

const webKey = {
  api_key: process.env.WEBCONTEXT_API_KEY, 
};

 const users_db = {
    username: process.env.db_username,
    password: process.env.db_password
}

 const gSearch = {
  key: process.env.GOOGLE_KEY,
  cseCode: process.env.GOOGLE_CSE_KEY
}

module.exports.users_db = users_db;
module.exports.gSearch = gSearch;
module.exports.webKey = webKey;