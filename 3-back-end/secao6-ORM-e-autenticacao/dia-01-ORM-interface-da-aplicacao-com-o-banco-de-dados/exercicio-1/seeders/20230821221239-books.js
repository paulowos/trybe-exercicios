'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('books',
      [
        { title: 'Teste 1', author: 'Author1', pageQuantity: 20 },
        { title: 'Teste 2', author: 'Author2', pageQuantity: 30 }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
