const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Select, Basket }) {
      this.hasMany(Basket, { foreignKey: 'drug_id' });
      this.hasMany(Select, { foreignKey: 'drug_id' });
    }
  }
  Drug.init({
    logo: DataTypes.TEXT,
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sale: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    check: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};
