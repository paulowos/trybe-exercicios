const { addressModel } = require('../models');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await addressModel.findAll({
    where: { employeeId },
    attributes: { exclude: ['id', 'employeeId'] },
  });
  return addresses;
};

module.exports = { getAllByEmployeeId };
