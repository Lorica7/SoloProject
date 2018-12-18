module.exports = function(sequelize, DataTypes) {
   
    var Garment = sequelize.define("Garment", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      size: DataTypes.INTEGER,
      website: DataTypes.STRING,
      item_number: DataTypes.INTEGER
    });
    return Garment;
  };
  

// Item Identifiers fo Amazon Products

// OfferListingId

//   ASIN — Amazon Standard Item Number 

// UPC — Universal Product Code 