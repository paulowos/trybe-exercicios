module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('userModel', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    }
  );

  return user;
};