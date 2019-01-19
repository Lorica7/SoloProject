module.exports = function (sequelize, DataTypes) {

 const Garment = sequelize.define("Garment", {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    image_link: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
  });

  return Garment;
};

