const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Basket }) {
      this.hasMany(Basket, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    select1: DataTypes.STRING,
    select2: DataTypes.STRING,
    select3: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
