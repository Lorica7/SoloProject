module.exports = function(sequelize, DataTypes) {
   
    var LogIn = sequelize.define("LogIn", {
      email: DataTypes.STRING,
    });
    return LogIn;
  };
  