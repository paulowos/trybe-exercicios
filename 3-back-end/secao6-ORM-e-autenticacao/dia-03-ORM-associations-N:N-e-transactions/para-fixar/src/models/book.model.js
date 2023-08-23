module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define('bookModel', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    totalPages: DataTypes.INTEGER
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'books'
    });
  return book;
};