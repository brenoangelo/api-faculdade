'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
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