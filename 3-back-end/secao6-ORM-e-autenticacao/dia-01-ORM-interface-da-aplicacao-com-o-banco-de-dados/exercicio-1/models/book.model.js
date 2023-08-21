module.exports = (sequelize, DataTypes) => {
  const bookModel = sequelize.define('bookModel', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, { tableName: 'books' });

  return bookModel;
};
