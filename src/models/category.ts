import { Sequelize, DataTypes as DT, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { ModelsTypes } from '../types';

export default (sequelize: Sequelize, DataTypes: typeof DT) => {
  class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    declare title: string;

    static associate(models: ModelsTypes) {
      Category.hasMany(models.Course, {
        foreignKey: 'category_id',
      });
    }
  }

  Category.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories',
    }
  );

  return Category;
};
