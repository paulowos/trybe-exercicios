module.exports = (sequelize, DataTypes) => {
  const userBook = sequelize.define('userBookModel',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books'
    });

  userBook.associate = (models) => {
    models.bookModel.belongsToMany(models.userModel, {
      as: 'users',
      through: userBook,
      foreignKey: 'bookId',
      otherKey: 'userId'
    });

    models.userModel.belongsToMany(models.bookModel, {
      as: 'books',
      through: userBook,
      foreignKey: 'userId',
      otherKey: 'bookId'
    });
  };


  return userBook;
};