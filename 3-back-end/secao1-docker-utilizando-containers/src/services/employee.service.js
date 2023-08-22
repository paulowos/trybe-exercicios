const { addressModel, employeeModel } = require('../models');

const getAll = async () => {
  const users = await employeeModel.findAll({
    include: { model: addressModel, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await employeeModel.findOne({
    where: { id },
    // include: [
    //   {
    //     model: addressModel,
    //     as: 'addresses',
    //     attributes: { exclude: ['id', 'employeeId'] },
    //   },
    // ],
  });
  return employee;
};

module.exports = { getAll, getById };
