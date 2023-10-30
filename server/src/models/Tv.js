module.exports = (sequelize, DataTypes) => {
    const Tv = sequelize.define("Tv", {
      brand: DataTypes.STRING,
      series: DataTypes.STRING,
      weight: DataTypes.STRING,
      resolution: DataTypes.STRING,
      screentype: DataTypes.STRING,
      screensize: DataTypes.STRING,
      price: DataTypes.STRING,
    });
    return Tv;
  };
  