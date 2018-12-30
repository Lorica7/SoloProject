console.log('this is loaded');

exports.webContext = {
  api_key: process.env.WEBCONTEXT_API_KEY, 
};


exports.users_db = {
    username: process.env.db_username,
    password: process.env.db_password
}

exports.googleSearch ={
  key: process.env.GOOGLE_KEY,
  cseCode: process.env.GOOGLE_CSE_KEY
}