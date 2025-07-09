import { Sequelize, DataTypes as DT, Model } from 'sequelize';
import { ModelsTypes } from '../types';

module.exports = (sequelize: Sequelize, DataTypes: typeof DT) => {
  class Person extends Model {
    declare name: string
    declare email: string
    declare cpf: string
    declare enabled: boolean
    declare role: string

    static associate(models: ModelsTypes) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      })
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        scope: { status: 'matriculado' },
        as: 'enrolledClasses'
      })
    }
  }
  Person.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'persons'
  });
  return Person;
};