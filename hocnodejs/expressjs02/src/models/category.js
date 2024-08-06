"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsToMany(models.Post, {
        foreignKey: "category_id",
        through: "posts_categories",
        as: "posts",
      });
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Category;
};
