module.exports = function(sequelize, DataTypes) {


var User= sequelize.define("User", {

  firstName: DataTypes.STRING,

  lastName: DataTypes.STRING,
 
  email: DataTypes.STRING,

  password: DataTypes.STRING,

  type: DataTypes.STRING,

  size: DataTypes.STRING,

  savedData: DataTypes.STRING
});
return User;
};