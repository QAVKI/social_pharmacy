const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Drugs }) {
      this.belongsTo(Users, { foreignKey: 'user_id' });
      this.belongsTo(Drugs, { foreignKey: 'drug_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
    drug_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
