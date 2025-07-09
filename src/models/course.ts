import { Sequelize, DataTypes as DT, Model } from 'sequelize';
import { ModelsTypes } from '../types';

export default (sequelize: Sequelize, DataTypes: typeof DT) => {
  class Course extends Model {
    declare title: string
    declare description: string
    declare start_date: Date

    static associate(models: ModelsTypes) {
      Course.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })
      Course.belongsTo(models.Person, {
        foreignKey: 'teacher_id'
      })
      Course.hasMany(models.Registration, {
        foreignKey: 'course_id'
      })
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};