module.exports = function(sequelize, DataTypes) {
   
   const LogIn = sequelize.define("LogIn", {
      email: DataTypes.STRING,
    });
    return LogIn;
  };
  