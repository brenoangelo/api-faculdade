"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/course.ts
var course_exports = {};
__export(course_exports, {
  default: () => course_default
});
module.exports = __toCommonJS(course_exports);
var import_sequelize = require("sequelize");
var course_default = (sequelize, DataTypes) => {
  class Course extends import_sequelize.Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: "category_id"
      });
      Course.belongsTo(models.Person, {
        foreignKey: "teacher_id"
      });
      Course.hasMany(models.Registration, {
        foreignKey: "course_id"
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: "Course",
    tableName: "courses"
  });
  return Course;
};
