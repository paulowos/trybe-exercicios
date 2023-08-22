module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    'employeeModel',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'employees',
      underscored: true,
    }
  );

  employee.associate = (models) => {
    employee.hasMany(models.addressModel, {
      foreignKey: 'employeeId',
      as: 'addresses',
    });
  };

  return employee;
};
