const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Select extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Drug }) {
      this.belongsTo(Drug, { foreignKey: 'drug_id' });
    }
  }
  Select.init({
    drug_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Select',
  });
  return Select;
};
