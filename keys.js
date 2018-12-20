console.log('this is loaded');

exports.webContext = {
  api_key: process.env.WEBCONTEXT_API_KEY, 
};



exports.users_db = {
    username: db_username,
    password: db_password
}