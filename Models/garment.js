module.exports = function (sequelize, DataTypes) {

  var Garment = sequelize.define("Garment", {
    title: DataTypes.STRING,
   
    link: DataTypes.STRING,
    image_link: DataTypes.INTEGER,
    email: DataTypes.STRING
  });

  // Garment.associate = function (models) {
  //   models.Garment.belongsTo(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  return Garment;
};

