module.exports = function (sequelize, DataTypes) {

  var Garment = sequelize.define("Garment", {
    title: DataTypes.STRING,
   
    link: DataTypes.STRING,
    image_link: DataTypes.INTEGER,
    email: DataTypes.STRING
  });

  return Garment;
};

