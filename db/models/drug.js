const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    this.findAll
    static associate({ Basket }) {
      this.hasMany(Basket, { foreignKey: 'drug_id' });
    }
  }
  Drug.init({
    logo: DataTypes.TEXT,
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sale: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};
