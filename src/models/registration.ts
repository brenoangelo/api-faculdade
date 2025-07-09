import { Sequelize, DataTypes as DT, Model } from 'sequelize';
import { ModelsTypes } from '../types';

export default (sequelize: Sequelize, DataTypes: typeof DT) => {
  class Registration extends Model {
    static associate(models: ModelsTypes) {
      Registration.belongsTo(models.Person, {
        foreignKey: 'student_id'
      })
      Registration.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
    }
  }
  Registration.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
    tableName: 'registrations'
  });
  return Registration;
};