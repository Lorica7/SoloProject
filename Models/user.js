module.exports = function(sequelize, DataTypes) {


const User= sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  firstName: DataTypes.STRING,

  lastName: DataTypes.STRING,
 
  email: DataTypes.STRING,

  password: DataTypes.STRING,
 
  type: DataTypes.STRING,

  size: DataTypes.STRING,

  savedData: DataTypes.TEXT
});

return User;
};