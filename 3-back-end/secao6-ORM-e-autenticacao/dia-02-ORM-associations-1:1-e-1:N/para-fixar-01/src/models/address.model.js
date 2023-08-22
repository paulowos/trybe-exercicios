module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    'addressModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      employeeId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'addresses',
      underscored: true,
    }
  );

  address.associate = (models) => {
    address.belongsTo(models.employeeModel, {
      foreignKey: 'employeeId',
      as: 'employees',
    });
  };

  return address;
};
